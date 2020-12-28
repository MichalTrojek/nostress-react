import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import RadioGroup from '../../../../../common/Forms/RadioGroup';
import ListContainer from '../../../../../common/Lists/ListContainer';
import MealListItem from './MealListItem';

import fetchMeals from '../../../../../../redux/actions/meals/fetchMeals';

const MealsList = ({
  meals = [],
  childMeals = [],
  breakfast = [],
  fetchMeals,
}) => {
  const [mealType, setMealType] = useState('isWeeklyMeal');

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return (
    <>
      {renderRadioGroup()}
      <ListContainer>{displayListByMealType(mealType)}</ListContainer>
    </>
  );

  function displayListByMealType(type) {
    switch (type) {
      case 'isChildMeal':
        return renderList(childMeals);
      case 'isBreakfastMeal':
        return renderList(breakfast);
      case 'isWeeklyMeal':
        return renderList(meals);
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
        <label>
          <input
            type="radio"
            value="isWeeklyMeal"
            name="mealType"
            defaultChecked={true}
            onChange={(event) => setMealType(event.target.value)}
          />
          Zobrazit týdenní menu
        </label>
        <label>
          <input
            type="radio"
            value="isBreakfastMeal"
            name="mealType"
            onChange={(event) => setMealType(event.target.value)}
          />
          Zobrazit snídaňové menu
        </label>
        <label>
          <input
            type="radio"
            value="isChildMeal"
            name="mealType"
            onChange={(event) => setMealType(event.target.value)}
          />
          Zobrazit dětské menu
        </label>
      </RadioGroup>
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {
    dataFetched: state.menu.dataFetched,
    meals: state.menu.meals,
    childMeals: state.menu.childMeals,
    breakfast: state.menu.breakfast,
  };
}
export default connect(mapStateToProps, { fetchMeals })(MealsList);
