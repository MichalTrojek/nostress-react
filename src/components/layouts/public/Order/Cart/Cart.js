import styled from 'styled-components';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

import CartFooter from './CartFooter';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartRadioGroup from './CartRadioGroup';

import Button from '../../../../common/Button';

const CartContainer = styled.div`
  border: 1px solid var(--color-tertiary);
`;

const Cart = ({ items = [] }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let tempPrice = 0;
    let tempAmount = 0;
    items.forEach((item) => {
      tempPrice += Number(item.price) * Number(item.amount);
      tempAmount += Number(item.amount);
    });
    setTotalPrice(tempPrice);
    setTotalAmount(tempAmount);
  }, [items]);

  return (
    <CartContainer>
      <CartHeader>
        <p className="amount">ks</p>
        <p className="name">Název</p>
        <p className="price">Cena/kus</p>
      </CartHeader>

      {items.length > 0 ? renderItems() : renderEmptyItem()}
      <CartFooter>
        <p>Celkem kusů: {totalAmount}</p>
        <p className="totalPrice">Celkem: {totalPrice} ,- </p>
      </CartFooter>
      <CartRadioGroup />
    </CartContainer>
  );

  function renderItems() {
    return items.map((item, index) => {
      return (
        <CartItem key={index}>
          <p className="name">{item.name}</p>
          <p className="amount"> {item.amount}</p>
          <p className="price"> {item.price},-</p>
        </CartItem>
      );
    });
  }

  function renderEmptyItem() {
    return (
      <CartItem>
        <p className="name">...</p>
        <p className="amount">...</p>
        <p className="price">...</p>
      </CartItem>
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.order.items,
  };
}

export default connect(mapStateToProps, {})(Cart);
