import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const StickyCartStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  padding: 2rem 1rem 2rem 1rem;
  height: 5rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;

  cursor: pointer;

  font-size: 1.6rem;
  font-weight: bold;
`;

const StickyCart = ({ setShowSummary, totalPrice, items }) => {
  const [amount, setAmount] = useState(55);
  useEffect(() => {
    let tempAmount = 0;
    items.forEach((item) => {
      tempAmount += item.amount;
    });
    setAmount(tempAmount);
  }, [items]);

  return (
    <StickyCartStyle onClick={handleClick}>
      <span className="sticky-cart__amount">{amount} ks.</span>
      <span className="sticky-cart__button">
        Pokračovat k objednávce &#8594;
      </span>
      <span className="sticky-cart__total-price">{totalPrice} Kč</span>
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

export default connect(mapStateToProps, null)(StickyCart);
