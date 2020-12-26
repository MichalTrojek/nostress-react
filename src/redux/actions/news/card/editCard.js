import {
  showErrorToast,
  showSuccessToast,
} from '../../../../notifications/toast';
import { EDIT_CARD } from '../../types';
import editCardApiCall from './editCardApiCall';

function editCard(card) {
  return async (dispatch, getState) => {
    const success = await editCardApiCall(card);
    if (success) {
      dispatch({
        type: EDIT_CARD,
        payload: card,
      });
      showSuccessToast('Karta byla editována.');
    } else {
      showErrorToast('Kartu se nepodařilo editovat.');
    }
  };
}
