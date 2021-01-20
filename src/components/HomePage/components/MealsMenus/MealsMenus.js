import styled from 'styled-components';

import { connect } from 'react-redux';

import WeeklyMenu from './WeeklyMenu';
import BreakFastMenu from './BreakFastMenu';

import sortOutMenusByType from '../../../../utils/mealUtils';

const MealsMenusBackground = styled.div`
  background-color: black;
  padding: 4rem 0 5rem 0;

  @media only screen and (min-width: 1400px) {
    padding-bottom: 7rem;
  }
`;

const MealsMenus = ({ weeklyMeals, childMeals, breakfastMeals, mainTexts }) => {
  return (
    <MealsMenusBackground>
      <WeeklyMenu
        meals={weeklyMeals}
        childMeals={childMeals}
        texts={mainTexts}
      />
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
    mainTexts: state.data.texts.mainMenu,
  };
}
export default connect(mapStateToProps, {})(MealsMenus);
