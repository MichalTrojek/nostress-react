import { EDIT_MEAL } from '../types';
import editMealApiCall from '../../../api/meals/editMealApiCall';
import { showErrorToast, showSuccessToast } from '../../../notifications/toast';

function editMeal(id, name, alergens, price) {
  console.log(id);
  return async (dispatch) => {
    const success = await editMealApiCall(id, name, alergens, price);
    if (success) {
      dispatch({ type: EDIT_MEAL, payload: { id, name, alergens, price } });
      showSuccessToast('Položka byla upravena.');
    } else {
      showErrorToast('Položka nebyla uložena do databáze');
    }
  };
}

export default editMeal;
