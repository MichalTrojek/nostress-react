import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../../../../common/Button';

import { connect } from 'react-redux';

import updateOrderToState from '../../../../../redux/actions/orders/updateOrderToState';
import getOrderNumberCall from '../../../../../api/order/getOrderNumberApiCall';
import getOrderNumberApiCall from '../../../../../api/order/getOrderNumberApiCall';

const OrderItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr 1fr min-content;
  grid-row-gap: 1rem;

  border: 1px solid var(--color-tertiary);
  padding: 1rem;
  margin-top: 1rem;

  margin: 0.2rem;
  width: 100%;

  transition: all 0.2s;

  @media only screen and (min-width: 768px) {
    --width: calc((98% / 2));
    max-width: var(--width);
    min-width: var(--width);
  }

  @media only screen and (min-width: 1024px) {
    --width: calc((99% / 2));
  }

  @media only screen and (min-width: 1209px) {
    --width: calc((99% / 3));
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

    @media only screen and (min-width: 1209px) {
      grid-column: 9 / -1;
    }
    @media only screen and (min-width: 1400px) {
      grid-column: 10/ -1;
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

const OrderItem = ({ name, alergens, price, updateOrderToState, items }) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    restoreState();
    function restoreState() {
      const currItem = items.filter((item) => item.name === name);
      if (currItem[0]) {
        setIsOrdered(true);
        setAmount(currItem[0].amount);
      }
    }
  }, [items, name]);

  useEffect(() => {
    updateOrderToState({
      name: name,
      price: price,
      amount: amount,
      isOrdered: isOrdered,
    });
  }, [amount, isOrdered, price, name, updateOrderToState]);

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

function mapStateToProps(state, ownProps) {
  return {
    items: state.order.items,
  };
}
export default connect(mapStateToProps, {
  updateOrderToState,
})(OrderItem);
