import { EDIT_MEAL } from '../types';
import editMealApiCall from '../../../api/meals/editMealApiCall';
import { showErrorToast, showSuccessToast } from '../../../notifications/toast';

function editMeal(meal) {
  console.log(meal);
  return async (dispatch) => {
    const success = await editMealApiCall(meal);
    if (success) {
      dispatch({ type: EDIT_MEAL, payload: meal });
      showSuccessToast('Položka byla upravena.');
    } else {
      showErrorToast('Položka nebyla uložena do databáze');
    }
  };
}

export default editMeal;
