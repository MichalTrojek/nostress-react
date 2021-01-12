import { useState, useEffect } from 'react';

import OrderedAmount from './OrderedAmount';
import Button from '../../../../../../common/Button';

import { connect } from 'react-redux';

import updateOrderToState from '../../../../../../../redux/actions/orders/updateOrderToState';

import styled from 'styled-components';

const OrderItemContainer = styled.div`
  border: 1px solid var(--color-tertiary);
  border-radius: 5px;
  padding: 1rem;
  padding-bottom: 10rem;

  position: relative;

  border-bottom: 1px solid
    ${(props) => (props.isOrdered ? 'red' : 'var(--color-tertiary)')};

  .name {
  }

  .alergens,
  .price {
  }

  .alergens {
  }

  .price {
  }

  .orderAndCancel {
    position: absolute;
    width: calc(100% + 2px);
    height: 20%;
    bottom: 0px;
    left: -1px;

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
    <OrderItemContainer isOrdered={isOrdered}>
      <p className="name">{name}</p>
      {alergens ? <p className="alergens">Alergeny: ({alergens})</p> : <p></p>}
      <p className="price">Cena: {price},-</p>
      {isOrdered ? renderButtons() : renderOrderButton()}
    </OrderItemContainer>
  );

  function renderButtons() {
    return (
      <>
        <OrderedAmount
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
        <Button className="orderAndCancel" onClick={stopOrdering}>
          zrušit
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
