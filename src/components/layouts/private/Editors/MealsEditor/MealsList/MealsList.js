import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import RadioGroup from '../../../../../common/Forms/RadioGroup';

import MealListItem from './MealListItem';

import fetchData from '../../../../../../redux/actions/data/fetchData';

import sortOutMenusByType from '../../../../../../utils/mealUtils';

import styled from 'styled-components';

const ListContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  grid-auto-rows: 1fr;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(32%, 1fr));
  }
`;

const MealsList = ({
  weeklyMeals = [],
  childMeals = [],
  breakfastMeals = [],
  fetchData,
  isEditModeOn,
}) => {
  const [mealType, setMealType] = useState('isWeeklyMeal');

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {renderRadioGroup()}
      <ListContainer>{renderListByMealType(mealType)}</ListContainer>
    </>
  );

  function renderListByMealType(type) {
    switch (type) {
      case 'isChildMeal':
        return renderList(childMeals);
      case 'isBreakfastMeal':
        return renderList(breakfastMeals);
      case 'isWeeklyMeal':
        return renderList(weeklyMeals);
      default:
        return [];
    }
  }

  function renderList(listOfMeals = []) {
    if (listOfMeals.length !== 0) {
      return listOfMeals.map((meal, index) => {
        return <MealListItem key={index} meal={meal} />;
      });
    }
  }

  function renderRadioGroup() {
    return (
      <RadioGroup style={{ paddingTop: '1rem' }}>
        <input
          id="showWeeklyId"
          type="radio"
          value="isWeeklyMeal"
          name="mealType"
          defaultChecked={true}
          onChange={(event) => setMealType(event.target.value)}
          disabled={isEditModeOn}
        />
        <label htmlFor="showWeeklyId">Zobrazit týdenní menu</label>

        <input
          id="showBreakfastId"
          type="radio"
          value="isBreakfastMeal"
          name="mealType"
          onChange={(event) => setMealType(event.target.value)}
          disabled={isEditModeOn}
        />
        <label htmlFor="showBreakfastId">Zobrazit snídaňové menu</label>

        <input
          id="showChildsMealsId"
          type="radio"
          value="isChildMeal"
          name="mealType"
          onChange={(event) => setMealType(event.target.value)}
          disabled={isEditModeOn}
        />
        <label htmlFor="showChildsMealsId">Zobrazit dětské menu</label>
      </RadioGroup>
    );
  }
};

function mapStateToProps(state, ownProps) {
  const { weeklyMeals, childMeals, breakfastMeals } = sortOutMenusByType(
    state.data.meals
  );
  return {
    weeklyMeals: weeklyMeals,
    childMeals: childMeals,
    breakfastMeals: breakfastMeals,
    isEditModeOn: state.editor.isEditModeOn,
  };
}

export default connect(mapStateToProps, { fetchData })(MealsList);
