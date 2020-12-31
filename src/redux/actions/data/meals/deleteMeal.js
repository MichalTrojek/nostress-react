import { UPDATE_MEALS } from '../../types';
import updateDataApiCall from '../api/updateDataApiCall';
import {
  showErrorToast,
  showSuccessToast,
} from '../../../../notifications/toast';

function deleteMeal(meal) {
  return async (dispatch, getState) => {
    const filteredMeals = getState().data.meals.filter((item) => {
      return item.id !== meal.id;
    });
    const success = await updateDataApiCall({ meals: filteredMeals });
    if (success) {
      showSuccessToast('Jidlo bylo vymazáno');
      dispatch({
        type: UPDATE_MEALS,
        payload: filteredMeals,
      });
    } else {
      showErrorToast('Jidlo se nepodařilo vymazat.');
    }
  };
}

export default deleteMeal;
