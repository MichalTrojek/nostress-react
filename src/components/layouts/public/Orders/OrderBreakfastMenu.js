import { connect } from 'react-redux';

import OrderItem from './OrderItem';

import MealListContainer from './styles/MealListContainer';

import sortOutMenusByType from '../../../../utils/mealUtils';

const OrderBreakfastMenu = ({ breakfastMeals = [] }) => {
  return (
    <>
      <h1>Snídaně</h1>
      <MealListContainer>{renderBreakfast()}</MealListContainer>
    </>
  );

  function renderBreakfast() {
    return breakfastMeals.map((meal, index) => {
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
  const { breakfastMeals } = sortOutMenusByType(state.data.meals);
  return {
    breakfastMeals: breakfastMeals,
  };
}

export default connect(mapStateToProps)(OrderBreakfastMenu);
