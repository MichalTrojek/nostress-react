import { connect } from 'react-redux';
import styled from 'styled-components';
import logo from '../../../../img/logo.png';

const ConfirmationContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

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

const Confirmation = ({ customerInfo, totalPrice, selectedForm }) => {
  return (
    <ConfirmationContainer>
      <Logo src={logo} alt="No Stress Logo" />
      <h1>Děkujeme Vám za Vaší objednávku.</h1>
      <p className="ready">Vaše objednávka se již připravuje.</p>
      {selectedForm === 'DELIVERY_FORM' ? renderDelivery() : renderPickUp()}
      <p className="price">
        Při převzetí budete platit <span>{totalPrice},-</span> Kč.
      </p>
    </ConfirmationContainer>
  );

  function renderPickUp() {
    return (
      <p className="name">
        Objednávka na jméno <span>{customerInfo.name}</span>
        pro Vás bude připravena do 15 minut k vyzvednutí u výdejního okna..
      </p>
    );
  }

  function renderDelivery() {
    return (
      <p className="name">
        Objednávka na jméno <span>{customerInfo.name}</span>
        bude doručena na Vámi zadanou adresu.
      </p>
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {
    customerInfo: state.order.customerInfo,
    totalPrice: state.order.totalPrice,
    selectedForm: state.order.selectedForm,
  };
}

export default connect(mapStateToProps, {})(Confirmation);
