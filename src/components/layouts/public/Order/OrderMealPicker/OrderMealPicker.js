import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OrderItem from '../OrderItem';

const OrderMealPicker = ({ menu, meals, childMeals, breakfast }) => {
  const history = useHistory();
  useEffect(() => {
    if (meals.length === 0) {
      history.push('/');
    }
  }, []);

  return <>{menu ?? renderBreakfast()}</>;

  function renderBreakfast() {
    return breakfast.map((meal, index) => {
      return <OrderItem key={index} meal={meal} />;
    });
  }
};

function mapStateToProps(state, ownProps) {
  const meals = [];
  const childMeals = [];
  const breakfast = [];
  state.meals.forEach((meal) => {
    const type = meal.type;
    if (type === 'isChildMeal') {
      childMeals.push(meal);
    } else if (type === 'isBreakfastMeal') {
      breakfast.push(meal);
    } else {
      meals.push(meal);
    }
  });

  return {
    meals: meals.reverse(),
    childMeals: childMeals.reverse(),
    breakfast: breakfast.reverse(),
  };
}

export default connect(mapStateToProps, {})(OrderMealPicker);
