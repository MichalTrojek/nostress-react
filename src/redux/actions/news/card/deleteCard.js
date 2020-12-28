import { DELETE_CARD } from '../../types';
import { storage } from '../../../../firebase';
import deleteCardApiCall from './deleteCardApiCall';

import {
  showErrorToast,
  showSuccessToast,
} from '../../../../notifications/toast';

function deleteCard(card) {
  return async (dispatch, getState) => {
    const success = await deleteCardApiCall(card.id);
    deleteImageFromStorage(card);
    if (success) {
      dispatch({
        type: DELETE_CARD,
        payload: card.id,
      });
      showSuccessToast('Karta byla vymazána');
    } else {
      showErrorToast('Kartu se nepodařilo vymazat');
    }
  };
}

function deleteImageFromStorage(card) {
  const storageRef = storage.ref();
  storageRef.child('cardImages/' + card.image.filename).delete();
}

export default deleteCard;
