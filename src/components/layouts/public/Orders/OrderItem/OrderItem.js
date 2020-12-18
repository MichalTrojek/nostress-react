import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../../../../common/Button';

import { connect } from 'react-redux';

import updateOrderToState from '../../../../../redux/actions/orders/updateOrderToState';

const OrderItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr 1fr min-content;
  grid-row-gap: 1rem;

  border: 1px solid var(--color-tertiary);
  padding: 1rem;
  margin-top: 1rem;

  @media only screen and (min-width: 768px) {
    --width: 35rem;
    max-width: var(--width);
    min-width: var(--width);
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media only screen and (min-width: 900px) {
    --width: 42rem;
  }

  @media only screen and (min-width: 920px) {
    --width: 45rem;
  }
  @media only screen and (min-width: 1024px) {
    --width: 48rem;
  }
  @media only screen and (min-width: 1300px) {
    --width: 65rem;
  }
  @media only screen and (min-width: 1300px) {
    --width: 32rem;
  }

  .name {
    grid-row: 1 / span 1;
    grid-column: 1 / -1;
    font-weight: bold;
    hyphens: auto;
  }

  .alergens,
  .price {
    align-self: center;
  }

  .alergens {
    grid-row: 2 / span 1;
    grid-column: 1 / span 5;

    @media only screen and (min-width: 768px) {
      grid-column: 1 / span 7;
    }
  }

  .price {
    grid-row: 2 / span 1;
    grid-column: 10 / -1;
    font-weight: bold;
    color: var(--color-tertiary);

    @media only screen and (min-width: 768px) {
      grid-column: 9 / -1;
    }

    @media only screen and (min-width: 900px) {
      grid-column: 10 / -1;
    }
    @media only screen and (min-width: 1400px) {
      grid-column: 8/ -1;
    }
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

const OrderItem = ({ name, alergens, price, updateOrderToState }) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    updateOrderToState({
      name: name,
      price: price,
      amount: amount,
      isOrdered: isOrdered,
    });
  }, [isOrdered, amount]);

  return (
    <OrderItemContainer>
      <p className="name">{name}</p>
      {alergens ? <p className="alergens">Alergeny: ({alergens})</p> : <p></p>}

      <p className="price">Cena: {price},-</p>
      {isOrdered ? renderButtons() : renderOrderButton()}
    </OrderItemContainer>
  );

  function renderButtons() {
    return (
      <>
        <Button className="orderAndCancel" onClick={stopOrdering}>
          zrušit
        </Button>
        <Button className="increment" primary onClick={() => increase()}>
          +
        </Button>
        <span className="counter">{amount}</span>
        <Button className="decrement" primary onClick={() => decrease()}>
          -
        </Button>
      </>
    );
  }

  function stopOrdering() {
    setIsOrdered(false);
    setAmount(1);
  }

  function increase() {
    if (amount <= 200) {
      setAmount(amount + 1);
    }
  }

  function decrease() {
    if (amount > 1) {
      setAmount(amount - 1);
    } else {
      stopOrdering();
    }
  }

  function renderOrderButton() {
    return (
      <Button className="orderAndCancel" primary onClick={startOrdering}>
        Přidat
      </Button>
    );
  }

  function startOrdering() {
    setIsOrdered(true);
  }
};

export default connect(null, {
  updateOrderToState,
})(OrderItem);
