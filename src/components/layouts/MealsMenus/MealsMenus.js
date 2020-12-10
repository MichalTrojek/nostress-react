import styled from 'styled-components';
import { useEffect } from 'react';

import { connect } from 'react-redux';

import WeeklyMenu from './WeeklyMenu';
import BreakFastMenu from './BreakFastMenu';

import fetchMeals from '../../../redux/actions/meals/fetchMeals';

const MealsMenusBackground = styled.div`
  background-color: black;
`;

const MealsMenus = ({ dataFetched, fetchMeals, meals, childMeals }) => {
  useEffect(() => {
    if (!dataFetched) {
      fetchMeals();
    }
  }, [fetchMeals]);

  return (
    <MealsMenusBackground>
      <WeeklyMenu meals={meals} childMeals={childMeals} />
      <BreakFastMenu />
    </MealsMenusBackground>
  );
};

function mapStateToProps(state, ownProps) {
  const meals = [];
  const childMeals = [];
  const dataFetched = state.meals.length > 0;
  state.meals.forEach((meal) => {
    if (meal.isChildMeal) {
      childMeals.push(meal);
    } else {
      meals.push(meal);
    }
  });

  return {
    meals: meals,
    childMeals: childMeals,
    dataFetched: dataFetched,
  };
}
export default connect(mapStateToProps, { fetchMeals })(MealsMenus);
