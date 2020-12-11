import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ListContainer from '../ListContainer';
import MealListItem from '../MealsList/MealListItem';
import fetchMeals from '../../../../redux/actions/meals/fetchMeals';

import RadioGroup from '../../Forms/RadioGroup';

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
  }, [fetchMeals]);

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
  const meals = [];
  const childMeals = [];
  const breakfast = [];
  const dataFetched = state.meals > 0;
  state.meals.forEach((meal) => {
    const type = meal.type;
    if (type === 'isChildMeal') {
      childMeals.push(meal);
    } else if (type === 'isBreakfastMeal') {
      breakfast.push(meal);
    } else {
      meals.push(meal);
    }
  });

  return {
    meals: meals,
    childMeals: childMeals,
    breakfast: breakfast,
    dataFetched: dataFetched,
  };
}
export default connect(mapPropsToState, { fetchMeals })(MealsList);
