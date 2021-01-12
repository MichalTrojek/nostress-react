import { connect } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../../../common/Forms/Form';
import FormGroup from '../../../../common/Forms/FormGroup';
import Button from '../../../../common/Button';

import SummaryBox from './SummaryBox';

import saveCustomerInfo from '../../../../../redux/actions/orders/saveCustomerInfo';
import createOrder from '../../../../../redux/actions/orders/createOrder';

import { sendOrderSentEmail } from '../../../../../utils/emailUtils';

import { motion } from 'framer-motion';

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
      <h1 style={{ paddingBottom: '1rem' }}>Souhrn objednávky</h1>
      <SummaryBox
        name={name}
        email={email}
        phoneNumber={phoneNumber}
        totalPrice={totalPrice}
        orderMethod={orderMethod}
        items={items}
      />

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
