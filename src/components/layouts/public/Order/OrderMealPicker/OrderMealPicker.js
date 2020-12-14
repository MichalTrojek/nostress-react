import styled from 'styled-components';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OrderItem from '../OrderItem';
import resetOrder from '../../../../../redux/actions/orders/resetOrder';

const OrderMealPickerContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const OrderMealPicker = ({ meals, childMeals, breakfast }) => {
  const history = useHistory();
  useEffect(() => {
    if (meals.length === 0) {
      history.push('/');
    }
  }, []);

  return (
    <>
      <h1 style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>Hlavní menu</h1>
      <OrderMealPickerContainer>{renderMainMenu()}</OrderMealPickerContainer>
      <h1 style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>Dětské menu</h1>
      <OrderMealPickerContainer>{renderChildMenu()}</OrderMealPickerContainer>
    </>
  );

  function renderChildMenu() {
    return childMeals.map((meal, index) => {
      return <OrderItem key={index} meal={meal} />;
    });
  }

  function renderMainMenu() {
    return meals.map((meal, index) => {
      return <OrderItem key={index} meal={meal} />;
    });
  }
};

function mapStateToProps(state, ownProps) {
  const meals = [];
  const childMeals = [];

  state.meals.forEach((meal) => {
    const type = meal.type;
    if (type === 'isChildMeal') {
      childMeals.push(meal);
    } else if (type === 'isWeeklyMeal') {
      meals.push(meal);
    }
  });

  return {
    meals: meals.reverse(),
    childMeals: childMeals.reverse(),
  };
}

export default connect(mapStateToProps, { resetOrder })(OrderMealPicker);
