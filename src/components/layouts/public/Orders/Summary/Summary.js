import styled from 'styled-components';
import { connect } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../../../common/Forms/Form';
import FormGroup from '../../../../common/Forms/FormGroup';
import Button from '../../../../common/Button';

import saveCustomerInfo from '../../../../../redux/actions/orders/saveCustomerInfo';
import createOrder from '../../../../../redux/actions/orders/createOrder';
import { DELIVERY } from '../../../../../utils/constant';
import { sendOrderSentEmail } from '../../../../../utils/emailUtils';

import { motion } from 'framer-motion';

const SummaryBox = styled.div`
  border: 1px solid var(--color-tertiary);
  padding: 1rem;
  display: grid;
  grid-row-gap: 1rem;

  .totalPrice {
    color: var(--color-tertiary);
    font-weight: bold;
    justify-self: flex-end;
  }
`;
const OrderedBox = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: max-content;

  .amount {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  .name {
    grid-column: 2 / 11;
    grid-row: 1 / span 1;
    hyphens: auto;
  }

  .price {
    grid-column: 12/ -1;
    grid-row: 1 / span 1;
    color: var(--color-tertiary);
  }
`;

const summaryVariants = {
  hidden: { display: 'none', x: '100vw' },
  exit: {
    x: '100vw',
    transitionEnd: {
      display: 'none',
    },
    transition: { delay: 0, duration: 0.5 },
  },

  visible: {
    x: 0,
    display: 'block',
    transition: { delay: 0, duration: 0.5 },
  },
};

const Summary = ({
  items = [],
  totalPrice,
  saveCustomerInfo,
  createOrder,
  hideSummary,
  menuType,
  orderMethod,
  showSummary,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [text, setText] = useState('');
  const history = useHistory();

  return (
    <motion.div
      variants={summaryVariants}
      initial="hidden"
      animate={showSummary ? 'visible' : 'hidden'}
      exit="exit"
      key="summaryKey"
    >
      <h1>Souhrn objednávky</h1>
      <SummaryBox>
        <p>
          Způsob dopravy:{' '}
          {orderMethod === DELIVERY ? 'ROZVOZ' : 'OSOBNÍ VYZVEDNUTÍ'}
        </p>
        <p>Jmeno: {name}</p>
        <p>Email: {email}</p>
        <p>Telefon: {phoneNumber}</p>
        {renderOrderedItems()}
        <p className="totalPrice">Cena celkem: {totalPrice},-</p>
      </SummaryBox>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <input
            type="text"
            placeholder="Jméno"
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="nameInput"
            required
          />
          <label htmlFor="nameInput">Jméno</label>
        </FormGroup>
        <FormGroup>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="emailInput"
            required
          />
          <label htmlFor="emailInput">Email</label>
        </FormGroup>
        <FormGroup>
          <input
            type="text"
            placeholder="Telefon"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            id="phoneInput"
            required
          />
          <label htmlFor="phoneInput">Telefon</label>
        </FormGroup>
        <label htmlFor="textInput">
          Ostatní informace (Vaše adresa, upřesnění objednávky)
        </label>
        <textarea
          className="textArea"
          rows="10"
          placeholder="Vložit text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          id="textInput"
        />

        <Button primary type="submit">
          objednat
        </Button>
        <Button
          style={{ marginTop: '1rem' }}
          primary
          onClick={(e) => handleBackButton(e)}
        >
          Zpět
        </Button>
      </Form>
    </motion.div>
  );

  function handleBackButton(e) {
    e.preventDefault();
    hideSummary();
  }

  function renderOrderedItems() {
    return items.map((item, index) => {
      return (
        <OrderedBox key={index}>
          <p className="name">{item.name}</p>
          <p className="amount">{item.amount} x </p>
          <p className="price">{item.price},-</p>
        </OrderedBox>
      );
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (items.length > 0) {
      const order = {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        text: text,
        items: items,
        menuType: menuType,
        orderMethod: orderMethod,
        isConfirmed: false,
        isFinished: false,
        totalPrice: totalPrice,
      };
      saveCustomerInfo(order);
      createOrder(order);
      sendOrderSentEmail(order.email, order);
      history.push('/orderConfirmation');
    }
  }
};

function mapStateToProps(state, ownProps) {
  return {
    totalPrice: state.order.totalPrice,
    items: state.order.items,
    menuType: state.order.orderingStarted.menuType,
    orderMethod: state.order.orderMethod,
  };
}

export default connect(mapStateToProps, { saveCustomerInfo, createOrder })(
  Summary
);
