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

  .price {
    color: var(--color-tertiary);
  }
  .items {
    min-height: 10rem;
    border-bottom: 1px solid var(--color-tertiary);
    padding: 1rem 0;
  }

  .boxes {
    padding-top: 1rem;
    p {
      font-size: 1.6rem;
      line-height: 1.6rem;
    }
  }
`;

const Cart = ({ items = [], total }) => {
  const PRICE_SOUP_BOX = 5;
  const PRICE_MEAL_BOX = 7;

  return (
    <CartContainer>
      <CartHeader>
        <p className="cart-header__amount">ks</p>
        <p className="cart-header__name">Název</p>
        <p className="cart-header__price">Cena/kus</p>
      </CartHeader>
      <div className="items">{renderItems()}</div>
      {renderBoxes()}
      <CartFooter
        totalAmount={total.totalAmount}
        priceForBoxes={calculatePriceForBoxes()}
        totalPrice={total.totalPrice}
      />
      <CartRadioGroup />
    </CartContainer>
  );

  function calculatePriceForBoxes() {
    const soups = PRICE_SOUP_BOX * total.soupBoxes;
    const meal = PRICE_MEAL_BOX * total.mealBoxes;
    return soups + meal;
  }

  function renderItems() {
    return items.map((item, index) => {
      return (
        <CartItem key={index}>
          <p className="name">{item.name}</p>
          <p className="amount"> {item.amount} x</p>
          <p className="price"> {item.price},-</p>
        </CartItem>
      );
    });
  }

  function renderBoxes() {
    return (
      <div className="boxes">
        <CartItem className="boxes">
          <p className="name">Obal na jídlo</p>
          <p className="amount">{total.mealBoxes} x</p>
          <p className="price"> {PRICE_MEAL_BOX},-</p>
        </CartItem>
        <CartItem className="boxes">
          <p className="name">Obal na polevku</p>
          <p className="amount">{total.soupBoxes} x</p>
          <p className="price"> {PRICE_SOUP_BOX},-</p>
        </CartItem>
      </div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.order.items,
    total: state.order.total,
  };
}

export default connect(mapStateToProps, {})(Cart);
