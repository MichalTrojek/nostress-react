import { UPDATE_MEALS } from '../../types';
import updateDataApiCall from '../api/updateDataApiCall';
import {
  showErrorToast,
  showSuccessToast,
} from '../../../../notifications/toast';

function editMeal(meal) {
  return async (dispatch, getState) => {
    const filteredMeals = getState().data.meals.filter((item) => {
      return item.id !== meal.id;
    });
    filteredMeals.push(meal);

    const success = await updateDataApiCall({ meals: filteredMeals });
    if (success) {
      dispatch({ type: UPDATE_MEALS, payload: filteredMeals });
      showSuccessToast('Položka byla upravena.');
    } else {
      showErrorToast('Položka nebyla uložena do databáze');
    }
  };
}

export default editMeal;
