import styled from 'styled-components';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import setTotal from '../../../../../redux/actions/order/setTotal';

const StickyCartStyle = styled.div`
  background-color: red;

  padding: 2rem 1rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;

  @media only screen and (min-width: 414px) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2.4rem;
  }

  .centered-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--max-width);
    margin: auto;
  }

  .center-text {
    margin: auto;
  }
`;

const StickyCart = ({
  setShowSummary,
  totalPrice,
  totalAmount,
  items,
  setTotal,
  boxPrices,
  orderingStatus,
}) => {
  useEffect(() => {
    let tempPrice = 0;
    let tempAmount = 0;
    let tempSoupBoxes = 0;
    let tempMealBoxes = 0;
    items.forEach((item) => {
      tempPrice += Number(item.price) * Number(item.amount);
      tempAmount += Number(item.amount);
      if (item.isSoup) {
        tempSoupBoxes += Number(item.amount);
      } else {
        tempMealBoxes += Number(item.amount);
      }
    });
    setTotal({
      totalPriceWithBoxes: tempPrice + calculatePriceForBoxes() || 0,
      priceOfBoxes: calculatePriceForBoxes() || 0,
      totalPrice: tempPrice,
      totalAmount: tempAmount,
      soupBoxes: tempSoupBoxes,
      mealBoxes: tempMealBoxes,
    });

    function calculatePriceForBoxes() {
      const soups = boxPrices.soupBoxPrice * tempSoupBoxes;
      const meals = boxPrices.mealBoxPrice * tempMealBoxes;
      return soups + meals;
    }
  }, [items, setTotal, boxPrices]);

  useEffect(() => {
    console.log(orderingStatus);
  }, [orderingStatus]);

  return (
    <StickyCartStyle onClick={handleClick}>
      {orderingStatus ? renderOrderingAllowed() : renderOrderingNotAllowed()}
    </StickyCartStyle>
  );

  function renderOrderingAllowed() {
    return (
      <div className="centered-content">
        <span className="sticky-cart__amount">{totalAmount} ks.</span>
        <span className="sticky-cart__button">
          Pokračovat k objednávce &#8594;
        </span>
        <span className="sticky-cart__total-price">{totalPrice} Kč</span>
      </div>
    );
  }

  function renderOrderingNotAllowed() {
    return (
      <div className="centered-content">
        <span className="center-text">
          Online objednávky jsou dočasně pozasteveny.
        </span>
      </div>
    );
  }

  function handleClick() {
    window.scrollTo(0, 0);
    setShowSummary(true);
  }
};
function mapStateToProps(state, ownProps) {
  return {
    totalPrice: state.order.total.totalPrice,
    totalAmount: state.order.total.totalAmount,
    boxPrices: state.data.boxPrices,
    orderingStatus: state.data.orderingStatus,
    items: state.order.items,
  };
}

export default connect(mapStateToProps, { setTotal })(StickyCart);
