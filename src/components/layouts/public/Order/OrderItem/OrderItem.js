import styled from 'styled-components';
import Button from '../../../../common/Button';
import { useState } from 'react';
const OrderItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 1rem;
  border: 1px solid var(--color-tertiary);
  padding: 1rem;
  margin-top: 1rem;
  .name {
    grid-row: 1 / span 1;
    grid-column: 1 / -1;
    font-weight: bold;
  }

  .alergens {
    grid-row: 2 / span 1;
    grid-column: 1 / span 5;
  }

  .price {
    grid-row: 2 / span 1;
    grid-column: 10 / -1;
    font-weight: bold;
    color: var(--color-tertiary);
  }

  .orderAndCancel {
    grid-row: 3 / span 1;
    grid-column: 1/ -1;
  }

  .increment {
    grid-row: 4 / span 1;
    grid-column: 1/ 5;
  }

  .decrement {
    grid-row: 4 / span 1;
    grid-column: 9/ -1;
  }

  .counter {
    grid-row: 4 / span 1;
    grid-column: 6/ 8;
    align-self: center;
    justify-self: center;
    font-weight: bold;
    font-size: 2rem;
  }
`;

const OrderItem = ({ item }) => {
  const [isOrdered, setIsOrdered] = useState(0);

  return (
    <OrderItemContainer>
      <p className="name">{item.name}</p>
      <p className="alergens">Alergeny: ({item.alergens})</p>
      <p className="price">Cena: {item.price},-</p>
      {isOrdered ? renderButtons() : renderOrderButton()}
    </OrderItemContainer>
  );

  function renderOrderButton() {
    return (
      <Button className="orderAndCancel" primary onClick={addToOrder}>
        Objednat
      </Button>
    );
  }

  function addToOrder() {
    setIsOrdered(true);
  }

  function renderButtons() {
    return (
      <>
        <Button className="orderAndCancel" onClick={removeFromOrder}>
          zrušit
        </Button>
        <Button className="increment" primary onClick={addToOrder}>
          +
        </Button>
        <span className="counter">1</span>
        <Button className="decrement" primary onClick={addToOrder}>
          -
        </Button>
      </>
    );
  }

  function removeFromOrder() {
    setIsOrdered(false);
  }
};

export default OrderItem;
