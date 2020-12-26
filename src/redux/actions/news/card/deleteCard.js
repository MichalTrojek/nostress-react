import { DELETE_CARD } from '../../types';
import deleteCardApiCall from './deleteCardApiCall';

import {
  showErrorToast,
  showSuccessToast,
} from '../../../../notifications/toast';

function deleteCard(id) {
  return async (dispatch, getState) => {
    const success = await deleteCardApiCall(id);
    console.log(success);
    if (success) {
      dispatch({
        type: DELETE_CARD,
        payload: id,
      });
      showSuccessToast('Karta byla vymazána');
    } else {
      showErrorToast('Kartu se nepodařilo vymazat');
    }
  };
}

export default deleteCard;
