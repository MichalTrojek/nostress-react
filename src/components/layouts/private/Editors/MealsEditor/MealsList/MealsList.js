import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import RadioGroup from '../../../../../common/Forms/RadioGroup';
import ListContainer from '../../../../../common/Lists/ListContainer';
import MealListItem from './MealListItem';

import fetchData from '../../../../../../redux/actions/data/fetchData';

import sortOutMenusByType from '../../../../../../utils/mealUtils';

const MealsList = ({
  weeklyMeals = [],
  childMeals = [],
  breakfastMeals = [],
  fetchData,
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
        />
        <label htmlFor="showWeeklyId">Zobrazit týdenní menu</label>

        <input
          id="showBreakfastId"
          type="radio"
          value="isBreakfastMeal"
          name="mealType"
          onChange={(event) => setMealType(event.target.value)}
        />
        <label htmlFor="showBreakfastId">Zobrazit snídaňové menu</label>

        <input
          id="showChildsMealsId"
          type="radio"
          value="isChildMeal"
          name="mealType"
          onChange={(event) => setMealType(event.target.value)}
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
  };
}

export default connect(mapStateToProps, { fetchData })(MealsList);
