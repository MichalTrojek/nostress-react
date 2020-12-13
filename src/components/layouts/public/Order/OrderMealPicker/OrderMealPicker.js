import styled from 'styled-components';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OrderItem from '../OrderItem';

const OrderMealPickerContainer = styled.div`
  @media only screen and (min-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const OrderMealPicker = ({ menuType, meals, childMeals, breakfast }) => {
  const history = useHistory();
  useEffect(() => {
    if (meals.length === 0) {
      history.push('/');
    }
  }, [menuType]);

  return (
    <OrderMealPickerContainer>
      {menuType === 'isWeeklyMenu' ? renderMainMenu() : renderBreakfast()}
    </OrderMealPickerContainer>
  );

  function renderBreakfast() {
    return breakfast.map((meal, index) => {
      return <OrderItem key={index} meal={meal} />;
    });
  }

  function renderMainMenu() {
    return (
      <>
        <h2>Hlavní menu</h2>

        <h2>Dětké menu</h2>

        <h2>Polevky</h2>
      </>
    );
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
