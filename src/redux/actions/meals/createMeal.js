import { CREATE_MEAL } from '../types';
import { showErrorToast, showSuccessToast } from '../../../notifications/toast';
import createMealApiCall from '../../../api/meals/createMealApiCall';

function createMeal(name, alergens, price) {
  return async (dispatch, getState) => {
    const id = await createMealApiCall(name, alergens, price);
    if (id) {
      dispatch({
        type: CREATE_MEAL,
        payload: {
          id: id,
          name: name,
          alergens: alergens,
          price: price,
        },
      });
      showSuccessToast('Jidlo bylo úspěšně uloženo.');
    } else {
      showErrorToast('Jidlo se nepodařilo uložit.');
    }
  };
}

export default createMeal;
