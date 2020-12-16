import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ListContainer from '../../../common/Lists/ListContainer';
import MealListItem from './MealListItem';
import fetchMeals from '../../../../redux/actions/meals/fetchMeals';

import RadioGroup from '../../../common/Forms/RadioGroup';

const MealsList = ({
  meals,
  childMeals,
  breakfast,
  fetchMeals,
  dataFetched,
}) => {
  const [mealType, setMealType] = useState('');

  useEffect(() => {
    if (!dataFetched) {
      fetchMeals();
    }
  }, [fetchMeals, dataFetched]);

  return (
    <ListContainer>
      {renderRadioGroup()}
      {displayListByMealType(mealType)}
    </ListContainer>
  );

  function displayListByMealType(type) {
    switch (type) {
      case 'isChildMeal':
        return renderList(childMeals);
      case 'isBreakfastMeal':
        return renderList(breakfast);
      default:
        return renderList(meals);
    }
  }

  function renderList(listOfMeals) {
    if (listOfMeals.length !== 0) {
      return listOfMeals.map((meal, index) => {
        return <MealListItem key={index} meal={meal} />;
      });
    }
  }

  function renderRadioGroup() {
    return (
      <RadioGroup>
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

function mapPropsToState(state, prevState) {
  return {
    meals: state.menu.meals,
    childMeals: state.menu.childMeals,
    breakfastMeals: state.menu.breakfast,
    dataFetched: state.menu.dataFetched,
  };
}
export default connect(mapPropsToState, { fetchMeals })(MealsList);
