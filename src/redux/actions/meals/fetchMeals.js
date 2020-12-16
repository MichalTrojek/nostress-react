import { FETCH_MEALS } from '../types';
import fetchMealsApiCall from '../../../api/meals/fetchMealsApiCall';

const fetchMeals = () => {
  return async (dispatch, getState) => {
    let data = await fetchMealsApiCall();
    dispatch({ type: FETCH_MEALS, payload: sortMeals(data) });
  };
};

function sortMeals(data) {
  const meals = [];
  const childMeals = [];
  const breakfast = [];

  data.forEach((item) => {
    const type = item.type;
    if (type === 'isChildMeal') {
      childMeals.push(item);
    } else if (type === 'isWeeklyMeal') {
      meals.push(item);
    } else if (type === 'isBreakfastMeal') {
      breakfast.push(item);
    }
  });

  const dataFetched =
    meals.length > 0 || childMeals.length > 0 || breakfast.length > 0;

  return {
    meals: meals,
    childMeals: childMeals,
    breakfast: breakfast,
    dataFetched: dataFetched,
  };
}

export default fetchMeals;
