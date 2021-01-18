import styled from 'styled-components';

import { connect } from 'react-redux';

import WeeklyMenu from './WeeklyMenu';
import BreakFastMenu from './BreakFastMenu';

import sortOutMenusByType from '../../../../utils/mealUtils';

const MealsMenusBackground = styled.div`
  background-color: black;
  padding: 4rem 0 6rem 0;
`;

const MealsMenus = ({ weeklyMeals, childMeals, breakfastMeals }) => {
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
export default connect(mapStateToProps, {})(MealsMenus);
