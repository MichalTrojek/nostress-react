import { useState, useEffect } from 'react';

import OrderedAmount from './OrderedAmount';
import Button from '../../../../../../common/Button';

import { connect } from 'react-redux';

import updateOrderToState from '../../../../../../../redux/actions/orders/updateOrderToState';

import styled, { keyframes } from 'styled-components';

import { fadeInUp } from 'react-animations';
const fadeUpAnimation = keyframes`${fadeInUp}`;

const OrderItemContainer = styled.div`
  border: 1px solid var(--color-tertiary);
  border-radius: 5px;
  padding: 1rem;
  padding-bottom: 12%;
  position: relative;
  border-bottom: 1px solid var(--color-tertiary);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .name {
    grid-row: 1 / span 1;
    grid-column: 1/ -1;
  }

  .priceAndAlergens {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    .price {
      color: var(--color-tertiary);
      font-weight: bold;
    }
  }

  .orderButton {
    position: absolute;
    width: 100%;

    animation: 0.2s ${fadeUpAnimation};

    bottom: 0px;
    left: 0px;

    border-radius: 3px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    &:hover {
      transform: translateY(0);
    }
    &:active {
      transform: translateY(0);
    }
  }
`;

const OrderItem = ({
  name,
  alergens,
  price,
  updateOrderToState,
  items = [],
  isSoup = false,
}) => {
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
      isSoup: isSoup,
    });
  }, [amount, isOrdered, price, name, updateOrderToState]);

  return (
    <OrderItemContainer isOrdered={isOrdered}>
      <p className="name">{name}</p>

      <div className="priceAndAlergens">
        {alergens ? (
          <p className="alergens">Alergeny: ({alergens})</p>
        ) : (
          <p></p>
        )}
        <p className="price">Cena: {price},-</p>
      </div>
      {isOrdered ? renderOrderAmount() : renderOrderButton()}
    </OrderItemContainer>
  );

  function renderOrderAmount() {
    return (
      <OrderedAmount increase={increase} decrease={decrease} amount={amount} />
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
      <Button className="orderButton" primary onClick={startOrdering}>
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
