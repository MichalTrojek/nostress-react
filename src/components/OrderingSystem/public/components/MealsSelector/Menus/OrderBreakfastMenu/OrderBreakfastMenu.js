import { connect } from 'react-redux';

import OrderItem from '../OrderItem';

import MealListContainer from '../MealListContainer';

import sortOutMenusByType from '../../../../../../../utils/mealUtils';

import { CSSTransition } from 'react-transition-group';
import '../menu.css';

const OrderBreakfastMenu = ({ breakfastMeals = [] }) => {
  return (
    <CSSTransition in={true} classNames="menu-" timeout={1000} appear={true}>
      <div>
        <h1 style={{ padding: '1rem 0rem' }}>Snídaně</h1>
        <MealListContainer>{renderBreakfast()}</MealListContainer>
      </div>
    </CSSTransition>
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
