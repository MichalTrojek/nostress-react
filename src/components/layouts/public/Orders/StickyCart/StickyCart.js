import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import setTotalPrice from '../../../../../redux/actions/orders/setTotalPrice';

const StickyCartStyle = styled.div`
  background-color: red;
  padding: 1.5rem 1rem 0rem 1rem;
  height: 5rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;

  cursor: pointer;

  font-size: 1.6rem;
  font-weight: bold;

  .centered-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--max-width);
    margin: auto;
  }
`;

const StickyCart = ({ setShowSummary, totalPrice, items, setTotalPrice }) => {
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
  }, [items, setTotalPrice]);

  return (
    <StickyCartStyle onClick={handleClick}>
      <div className="centered-content">
        <span className="sticky-cart__amount">{totalAmount} ks.</span>
        <span className="sticky-cart__button">
          Pokračovat k objednávce &#8594;
        </span>
        <span className="sticky-cart__total-price">{totalPrice} Kč</span>
      </div>
    </StickyCartStyle>
  );

  function handleClick() {
    window.scrollTo(0, 0);
    setShowSummary(true);
  }
};
function mapStateToProps(state, ownProps) {
  return {
    totalPrice: state.order.totalPrice,
    items: state.order.items,
  };
}

export default connect(mapStateToProps, { setTotalPrice })(StickyCart);
