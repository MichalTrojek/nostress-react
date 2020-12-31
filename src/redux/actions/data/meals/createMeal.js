import { UPDATE_MEALS } from '../../types';
import {
  showErrorToast,
  showSuccessToast,
} from '../../../../notifications/toast';
import updateDataApiCall from '../../../actions/data/api/updateDataApiCall';

function createMeal(meal) {
  return async (dispatch, getState) => {
    const allMeals = [...getState().data.meals, meal];
    const success = await updateDataApiCall({ meals: allMeals });
    if (success) {
      dispatch({
        type: UPDATE_MEALS,
        payload: allMeals,
      });
      showSuccessToast('Jidlo bylo úspěšně uloženo.');
    } else {
      showErrorToast('Jidlo se nepodařilo uložit.');
    }
  };
}

export default createMeal;
