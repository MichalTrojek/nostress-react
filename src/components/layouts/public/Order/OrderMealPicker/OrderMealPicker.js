import styled from 'styled-components';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import OrderItem from './OrderItem';
import resetOrder from '../../../../../redux/actions/orders/resetOrder';

const OrderMealPickerContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const OrderMealPicker = ({ meals, childMeals, soup }) => {
  const history = useHistory();
  useEffect(() => {
    if (meals.length === 0) {
      history.push('/');
    }
  }, [history, meals.length]);

  return (
    <>
      <h1 style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>Hlavní menu</h1>
      <OrderMealPickerContainer>{renderMainMenu()}</OrderMealPickerContainer>
      <h1 style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>Dětské menu</h1>
      <OrderMealPickerContainer>{renderChildMenu()}</OrderMealPickerContainer>
      <h1 style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>Polévky</h1>
      <OrderMealPickerContainer>
        <OrderItem name={soup.name} price={soup.price} />
      </OrderMealPickerContainer>
    </>
  );

  function renderChildMenu() {
    return childMeals.map((meal, index) => {
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

  function renderMainMenu() {
    return meals.map((meal, index) => {
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

function selectSoupByDay(day, soups) {
  switch (day) {
    case 1:
      return soups.monday;
    case 2:
      return soups.tuesday;
    case 3:
      return soups.wednesday;
    case 4:
      return soups.thurday;
    case 5:
      return soups.friday;
    default:
      return '';
  }
}

function mapStateToProps(state, ownProps) {
  const meals = [];
  const childMeals = [];
  const soups = state.soups;

  const soup = {
    name: selectSoupByDay(new Date().getDay(), soups),
    price: soups.price,
  };

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
    soup: soup,
  };
}

export default connect(mapStateToProps, { resetOrder })(OrderMealPicker);
