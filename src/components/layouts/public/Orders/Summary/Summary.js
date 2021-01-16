import { connect } from 'react-redux';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import Form from '../../../../common/Forms/Form';
import FormGroup from '../../../../common/Forms/FormGroup';
import Button from '../../../../common/Button';

import SummaryBox from './SummaryBox';
import Cart from '../MealsSelector/Cart';

import saveCustomerInfo from '../../../../../redux/actions/orders/saveCustomerInfo';
import createOrder from '../../../../../redux/actions/orders/createOrder';

import { sendOrderSentEmail } from '../../../../../utils/emailUtils';

import './Summary.css';

const Summary = ({
  items = [],
  totalPrice,
  saveCustomerInfo,
  createOrder,
  hideSummary,
  menuType,
  orderMethod,
  showSummary,
  setShowConfirmation,
  setShowSummary,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [text, setText] = useState('');

  return (
    <CSSTransition
      in={showSummary}
      timeout={1000}
      classNames="summary-"
      unmountOnExit={true}
    >
      <div
        style={{
          position: 'absolute',
          width: 'calc(100% - 2rem)',
        }}
      >
        <h1 style={{ paddingBottom: '1rem' }}>Souhrn objednávky</h1>
        <Cart />
        {/* <SummaryBox
          name={name}
          email={email}
          phoneNumber={phoneNumber}
          totalPrice={totalPrice}
          orderMethod={orderMethod}
          items={items}
        /> */}

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
      </div>
    </CSSTransition>
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
      setShowSummary(false);
      setShowConfirmation(true);
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
