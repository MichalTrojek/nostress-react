import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../../../../common/Button';

import { connect } from 'react-redux';

import addOrders from '../../../../../redux/actions/orders/addOrdersToState';

const OrderItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 1rem;
  border: 1px solid var(--color-tertiary);
  padding: 1rem;
  margin-top: 1rem;

  @media only screen and (min-width: 900px) {
    max-width: 48rem;
    min-width: 48rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

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

const OrderItem = ({ meal, orders, addOrders: addOrdersToState }) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    if (isOrdered && amount > 0) {
      addMealToOrders();
      addOrdersToState(orders);
    } else {
      setIsOrdered(false);
      removeMealFromOrders();
      setAmount(1);
    }

    function addMealToOrders() {
      removeFromOrdersIfExists();
      orders.push({
        name: meal.name,
        price: meal.price,
        amount: amount,
      });
    }

    function removeFromOrdersIfExists() {
      orders = orders.filter((order) => order.name !== meal.name);
    }

    function removeMealFromOrders() {
      removeFromOrdersIfExists();
      addOrdersToState(orders);
    }
  }, [amount, isOrdered]);

  return (
    <OrderItemContainer>
      <p className="name">{meal.name}</p>
      <p className="alergens">Alergeny: ({meal.alergens})</p>
      <p className="price">Cena: {meal.price},-</p>
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
  }

  function increase() {
    if (amount <= 200) {
      setAmount(amount + 1);
    }
  }

  function decrease() {
    if (amount > 0) {
      setAmount(amount - 1);
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
    orders: state.order.items,
  };
}

export default connect(mapStateToProps, { addOrders })(OrderItem);
