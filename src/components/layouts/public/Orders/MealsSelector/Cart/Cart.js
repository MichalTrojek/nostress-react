import styled from 'styled-components';
import { connect } from 'react-redux';

import CartFooter from './styles/CartFooter';
import CartHeader from './styles/CartHeader';

import CartItem from './styles/CartItem';

import CartRadioGroup from './CartRadioGroup';

const CartContainer = styled.div`
  border: 1px solid var(--color-tertiary);
  border-radius: 10px;
  transition: all 1s;

  .items {
    min-height: 10rem;
    @media only screen and (min-width: 1024px) {
      min-height: 15rem;
    }
  }
`;

const Cart = ({ items = [], totalPrice, totalAmount }) => {
  return (
    <CartContainer>
      <CartHeader>
        <p className="amount">ks</p>
        <p className="name">Název</p>
        <p className="price">Cena/kus</p>
      </CartHeader>
      <div className="items">{renderItems()}</div>
      <CartFooter>
        <p>Celkem kusů: {totalAmount}</p>
        <p className="totalPrice">Celkem: {totalPrice},- Kč </p>
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
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.order.items,
    totalPrice: state.order.total.totalPrice,
    totalAmount: state.order.total.totalAmount,
  };
}

export default connect(mapStateToProps, {})(Cart);
