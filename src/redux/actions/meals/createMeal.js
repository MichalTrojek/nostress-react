import { CREATE_MEAL } from '../types';
import { showErrorToast, showSuccessToast } from '../../../notifications/toast';
import createMealApiCall from '../../../api/meals/createMealApiCall';

function createMeal(meal) {
  return async (dispatch, getState) => {
    const id = await createMealApiCall(meal);
    if (id) {
      dispatch({
        type: CREATE_MEAL,
        payload: { ...meal, id: id },
      });
      showSuccessToast('Jidlo bylo úspěšně uloženo.');
    } else {
      showErrorToast('Jidlo se nepodařilo uložit.');
    }
  };
}

export default createMeal;
