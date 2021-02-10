import { connect } from 'react-redux';
import styled from 'styled-components';

import logo from '../../../../../img/logo.png';
import { DELIVERY } from '../../../../../utils/constant';

import { CSSTransition } from 'react-transition-group';
import './Confirmation.css';

const ConfirmationContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  width: 100%;

  h1 {
    text-align: center;
  }

  .ready {
    padding: 3rem 0;
  }

  .name {
    text-align: center;
    span {
      font-weight: bold;
      padding: 0 0.6rem 0 0.3rem;
    }
  }

  .price {
    padding: 3rem 0;
    color: var(--color-tertiary);
  }

  .payment {
  }

  h1 {
    padding: 2rem 0;
  }
`;

const Logo = styled.img`
  height: 5rem;
  max-width: 100%;
  transition: height 1s;
  @media only screen and (min-width: 360px) {
    height: 6rem;
  }
`;

const Confirmation = ({
  customerInfo,
  totalPrice,
  orderMethod,
  showConfirmation,
  totalPriceWithBoxes,
}) => {
  return (
    <CSSTransition
      in={showConfirmation}
      classNames="confirmation-"
      timeout={1000}
      unmountOnExit={true}
    >
      <ConfirmationContainer>
        <Logo src={logo} alt="No Stress Logo" />
        {orderMethod === DELIVERY ? renderDelivery() : renderPickUp()}
      </ConfirmationContainer>
    </CSSTransition>
  );

  function renderDelivery() {
    return (
      <>
        <h1>Děkujeme Vám za Vaší objednávku.</h1>
        <p className="ready">Vaše objednávka se již připravuje.</p>
        <p className="name">
          Objednávka na jméno{' '}
          <span>{`${customerInfo.name} ${customerInfo.surname}`}</span>
          bude doručena na Vámi zadanou adresu.
        </p>
        <p className="price">
          Při převzetí budete platit <span>{totalPriceWithBoxes},-</span> Kč.{' '}
        </p>
        <p className="payment">(Lze platit pouze hotově)</p>
      </>
    );
  }

  function renderPickUp() {
    return (
      <>
        <h1>Děkujeme Vám za Vaší objednávku.</h1>
        <p className="ready">Vaše objednávka se již připravuje.</p>
        <p className="name">
          Objednávka na jméno{' '}
          <span>{`${customerInfo.name} ${customerInfo.surname}`}</span>
          pro Vás bude připravena do 15 minut k vyzvednutí u výdejního okna.
        </p>
        <p className="price">
          Při převzetí budete platit <span>{totalPrice},-</span> Kč.
        </p>

        <p className="payment">(Lze platit hotově i kartou)</p>
      </>
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {
    customerInfo: state.order.customerInfo,
    totalPrice: state.order.total.totalPrice,
    totalPriceWithBoxes: state.order.total.totalPriceWithBoxes,
    orderMethod: state.order.orderMethod,
  };
}

export default connect(mapStateToProps, {})(Confirmation);
