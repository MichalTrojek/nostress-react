import styled from 'styled-components';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import CartFooter from './styles/CartFooter';
import CartHeader from './styles/CartHeader';

import CartItem from './styles/CartItem';

import CartRadioGroup from './CartRadioGroup';
import { DELIVERY } from '../../../../../../utils/constant';

const CartContainer = styled.div`
  border: 1px solid var(--color-tertiary);
  border-radius: 10px;
  transition: all 1s;

  .price {
    color: var(--color-tertiary);
  }
  .items {
    min-height: 10rem;
    border-bottom: ${(props) =>
      props.showBoxes ? '1px solid var(--color-tertiary)' : 'none'};
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

const Cart = ({
  items = [],
  total,
  orderMethod,
  soupBoxPrice,
  mealBoxPrice,
}) => {
  const [showBoxes, setShowBoxes] = useState(false);
  const [showSoupBoxes, setShowSoupBoxes] = useState(false);

  useEffect(() => {
    setShowBoxes(orderMethod === DELIVERY);

    setShowSoupBoxes(total.soupBoxes > 0);
  }, [orderMethod, setShowBoxes, setShowSoupBoxes, total.soupBoxes]);

  return (
    <CartContainer showBoxes={showBoxes}>
      <CartHeader>
        <p className="cart-header__amount">ks</p>
        <p className="cart-header__name">Název</p>
        <p className="cart-header__price">Cena/kus</p>
      </CartHeader>
      <div className="items">{renderItems()}</div>
      {showBoxes && renderBoxes()}
      <CartFooter
        showBoxes={showBoxes}
        totalAmount={total.totalAmount}
        priceForBoxes={total.priceOfBoxes}
        totalPrice={total.totalPrice}
        totalPriceWithBoxes={total.totalPriceWithBoxes}
      />
      <CartRadioGroup />
    </CartContainer>
  );

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
          <p className="price"> {mealBoxPrice},-</p>
        </CartItem>
        {showSoupBoxes && (
          <CartItem className="boxes">
            <p className="name">Obal na polevku</p>
            <p className="amount">{total.soupBoxes} x</p>
            <p className="price"> {soupBoxPrice},-</p>
          </CartItem>
        )}
      </div>
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.order.items,
    total: state.order.total,
    orderMethod: state.order.orderMethod,
    soupBoxPrice: state.data.boxPrices.soupBoxPrice,
    mealBoxPrice: state.data.boxPrices.mealBoxPrice,
  };
}

export default connect(mapStateToProps, {})(Cart);
