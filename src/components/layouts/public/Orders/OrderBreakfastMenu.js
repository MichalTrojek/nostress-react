import { connect } from 'react-redux';

import OrderItem from './OrderItem';

import MealListContainer from './styles/MealListContainer';

const OrderBreakfastMenu = ({ breakfast = [] }) => {
  return (
    <>
      <h1>Snídaně</h1>
      <MealListContainer>{renderBreakfast()}</MealListContainer>
    </>
  );

  function renderBreakfast() {
    return breakfast.map((meal, index) => {
      return (
        <OrderItem
          key={index}
          name={meal.name}
          price={meal.price}
          alergens={meal.alergens}
        />
      );
    });
  }
};

function mapStateToProps(state, ownProps) {
  return {
    breakfast: state.menu.breakfast,
  };
}

export default connect(mapStateToProps)(OrderBreakfastMenu);
