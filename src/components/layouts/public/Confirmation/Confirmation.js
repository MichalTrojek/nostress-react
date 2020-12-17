import { connect } from 'react-redux';

const Confirmation = ({ customerInfo, totalPrice, selectedForm }) => {
  return (
    <>
      <p>Děkujeme Vám za objednávku. Vaše objednávka se již připravuje.</p>
      {renderMessage(selectedForm)}
      <p>Při převzetí budete platit {totalPrice},- Kč.</p>
    </>
  );

  function renderMessage(selectedForm) {
    console.log(selectedForm);
    switch (selectedForm) {
      case 'DELIVERY_FORM':
        return (
          <>
            <p>
              Objednávka číslo {customerInfo.id} na jméno {customerInfo.name}
              bude doručena na Vámi zadanou adresu.
            </p>
          </>
        );
      case 'PICKUP_FORM':
        return (
          <>
            <p>
              Objednávka číslo {customerInfo.id} na jméno {customerInfo.name}{' '}
              pro Vás bude připravena do 15 minut k vyzvednutí u výdejního okna.
            </p>
          </>
        );
    }
  }

  function renderPickupMessage() {
    return <></>;
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
