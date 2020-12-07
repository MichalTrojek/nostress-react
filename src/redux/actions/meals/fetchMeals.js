import { FETCH_MEALS } from '../types';
import fetchMealsApiCall from '../../../api/meals/fetchMealsApiCall';

const fetchMeals = () => {
  return async (dispatch, getState) => {
    let data = await fetchMealsApiCall();
    dispatch({ type: FETCH_MEALS, payload: data });
  };
};

export default fetchMeals;
