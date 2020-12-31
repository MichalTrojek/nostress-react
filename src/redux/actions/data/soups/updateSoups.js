import {
  showErrorToast,
  showSuccessToast,
} from '../../../../notifications/toast';
import { UPDATE_SOUPS } from '../../types';
import updateDataApiCall from '../api/updateDataApiCall';
function updateSoups(soups) {
  return async (dispatch, getState) => {
    const success = await updateDataApiCall({ soups: soups });
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
