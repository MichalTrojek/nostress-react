import styled from 'styled-components';

const CartFooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding: 1rem;

  .sum {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .totalPrice {
      font-weight: bold;
      color: var(--color-tertiary);
    }

    .boxesPrice {
      font-size: 1.6rem;
      padding-left: 1rem;
    }
  }
`;

const CartFooter = ({ totalAmount, priceForBoxes, totalPrice, showBoxes }) => {
  return (
    <CartFooterStyle>
      <p>Celkem kusů: {totalAmount}</p>
      <div className="sum">
        {showBoxes ? renderWithDelivery() : renderWithoutDelivery()}
      </div>
    </CartFooterStyle>
  );

  function renderWithDelivery() {
    return (
      <>
        <p className="totalPrice">Obaly: {priceForBoxes},- Kč</p>
        <p className="totalPrice">Jídlo: {totalPrice},- Kč </p>
        <p className="totalPrice">
          Cena celkem: {totalPrice + priceForBoxes},- Kč{' '}
        </p>
      </>
    );
  }

  function renderWithoutDelivery() {
    return <p className="totalPrice">Cena celkem: {totalPrice},- Kč </p>;
  }
};

export default CartFooter;
