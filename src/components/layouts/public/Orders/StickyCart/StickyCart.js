import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

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
      <div className="centered-content">
        <span className="sticky-cart__amount">{amount} ks.</span>
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

export default connect(mapStateToProps, null)(StickyCart);
