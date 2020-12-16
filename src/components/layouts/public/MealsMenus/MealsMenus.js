import styled from 'styled-components';
import { useEffect } from 'react';

import { connect } from 'react-redux';

import WeeklyMenu from './WeeklyMenu';
import BreakFastMenu from './BreakFastMenu';

import fetchMeals from '../../../../redux/actions/meals/fetchMeals';

const MealsMenusBackground = styled.div`
  background-color: black;
`;

const MealsMenus = ({
  dataFetched,
  fetchMeals,
  meals,
  childMeals,
  breakfastMeals,
}) => {
  useEffect(() => {
    if (!dataFetched) {
      fetchMeals();
    }
  }, [fetchMeals, dataFetched]);

  return (
    <MealsMenusBackground>
      <WeeklyMenu meals={meals} childMeals={childMeals} />
      <BreakFastMenu breakfastMeals={breakfastMeals} />
    </MealsMenusBackground>
  );
};

function mapStateToProps(state, ownProps) {
  const dataFetched = state.menu.meals > 0;

  return {
    meals: state.menu.meals,
    childMeals: state.menu.childMeals,
    breakfastMeals: state.menu.breakfast,
    dataFetched: dataFetched,
  };
}
export default connect(mapStateToProps, { fetchMeals })(MealsMenus);
