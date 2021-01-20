import {
  showErrorToast,
  showSuccessToast,
} from '../../../../notifications/toast';
import { UPDATE_TEXTS } from '../../types';
import updateDataApiCall from '../api/updateDataApiCall';

function updateTexts(texts) {
  return async (dispatch, getState) => {
    const success = await updateDataApiCall({ texts: texts });
    if (success) {
      dispatch({
        type: UPDATE_TEXTS,
        payload: texts,
      });
      showSuccessToast('Data byla uložena do databáze.');
    } else {
      showErrorToast('Data se nepodařilo uložit do databáze.');
    }
  };
}

export default updateTexts;
