import { DELETE_MEAL } from '../types';
import deleteMealApiCall from '../../../api/meals/deleteMealApiCall';
import { showErrorToast, showSuccessToast } from '../../../notifications/toast';

function deleteMeal(id) {
  return async (dispatch, getState) => {
    const succes = await deleteMealApiCall(id);
    if (succes) {
      showSuccessToast('Jidlo bylo vymazáno');
      dispatch({
        type: DELETE_MEAL,
        payload: id,
      });
    } else {
      showErrorToast('Jidlo se nepodařilo vymazat.');
    }
  };
}

export default deleteMeal;
