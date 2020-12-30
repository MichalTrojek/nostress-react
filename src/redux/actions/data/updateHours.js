import { showErrorToast, showSuccessToast } from '../../../notifications/toast';
import { UPDATE_HOURS } from '../types';
import updateHoursApiCall from './api/updateHoursApiCall';

function updateHours(hours) {
  return async (dispatch, getState) => {
    const success = await updateHoursApiCall(hours);
    if (success) {
      dispatch({
        type: UPDATE_HOURS,
        payload: hours,
      });
      showSuccessToast('Data byla uložena do databáze.');
    } else {
      showErrorToast('Data se nepodařilo uložit do databáze.');
    }
  };
}

export default updateHours;
