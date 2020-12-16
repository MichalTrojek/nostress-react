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
  breakfast,
}) => {
  useEffect(() => {
    if (!dataFetched) {
      fetchMeals();
    }
  }, [fetchMeals, dataFetched]);

  return (
    <MealsMenusBackground>
      <WeeklyMenu meals={meals} childMeals={childMeals} />
      <BreakFastMenu breakfast={breakfast} />
    </MealsMenusBackground>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    meals: state.menu.meals,
    childMeals: state.menu.childMeals,
    breakfast: state.menu.breakfast,
    dataFetched: state.menu.dataFetched,
  };
}
export default connect(mapStateToProps, { fetchMeals })(MealsMenus);
