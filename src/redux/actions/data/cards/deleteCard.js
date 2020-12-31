import { UPDATE_CARDS } from '../../types';
import { storage } from '../../../../firebase';
import updateDataApiCall from '../api/updateDataApiCall';

import {
  showErrorToast,
  showSuccessToast,
} from '../../../../notifications/toast';

function deleteCard(card) {
  return async (dispatch, getState) => {
    const filteredCards = getState().data.cards.filter(
      (item) => item.id !== card.id
    );
    const success = await updateDataApiCall({ cards: filteredCards });
    deleteImageFromStorage(card);
    if (success) {
      dispatch({
        type: UPDATE_CARDS,
        payload: filteredCards,
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
