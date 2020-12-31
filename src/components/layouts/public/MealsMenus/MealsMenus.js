import styled from 'styled-components';
import { useEffect } from 'react';

import { connect } from 'react-redux';

import WeeklyMenu from './WeeklyMenu';
import BreakFastMenu from './BreakFastMenu';

import fetchData from '../../../../redux/actions/data/fetchData';

import sortOutMenusByType from '../../../../utils/mealUtils';

const MealsMenusBackground = styled.div`
  background-color: black;
`;

const MealsMenus = ({ fetchData, weeklyMeals, childMeals, breakfastMeals }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <MealsMenusBackground>
      <WeeklyMenu meals={weeklyMeals} childMeals={childMeals} />
      <BreakFastMenu breakfast={breakfastMeals} />
    </MealsMenusBackground>
  );
};

function mapStateToProps(state, ownProps) {
  const { weeklyMeals, childMeals, breakfastMeals } = sortOutMenusByType(
    state.data.meals
  );
  return {
    weeklyMeals: weeklyMeals,
    childMeals: childMeals,
    breakfastMeals: breakfastMeals,
  };
}
export default connect(mapStateToProps, { fetchData })(MealsMenus);
