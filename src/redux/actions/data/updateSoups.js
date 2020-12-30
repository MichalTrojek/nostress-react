import { showErrorToast, showSuccessToast } from '../../../notifications/toast';
import { UPDATE_SOUPS } from '../types';
import updateSoupsApiCall from './api/updateSoupsApiCall';

function updateSoups(soups) {
  return async (dispatch, getState) => {
    const success = await updateSoupsApiCall(soups);
    if (success) {
      dispatch({
        type: UPDATE_SOUPS,
        payload: soups,
      });
      showSuccessToast('Data byla uložena do databáze.');
    } else {
      showErrorToast('Data se nepodařilo uložit do databáze.');
    }
  };
}

export default updateSoups;
