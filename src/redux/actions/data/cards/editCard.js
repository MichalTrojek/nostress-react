import {
  showErrorToast,
  showSuccessToast,
} from '../../../../notifications/toast';
import { UPDATE_CARDS } from '../../types';
import updateDataApiCall from '../api/updateDataApiCall';

import { storage } from '../../../../firebase';

function editCard(card, selectedItem) {
  return async (dispatch, getState) => {
    const filteredCards = getState().data.cards.filter(
      (item) => item.id !== card.id
    );
    filteredCards.push(card);
    const success = await updateDataApiCall({ cards: filteredCards });
    deleteOldImageFromStorage(card, selectedItem);
    if (success) {
      dispatch({
        type: UPDATE_CARDS,
        payload: filteredCards,
      });
      showSuccessToast('Karta byla editována.');
    } else {
      showErrorToast('Kartu se nepodařilo editovat.');
    }
  };
}

function deleteOldImageFromStorage(card, selectedItem) {
  if (card.image.filename !== selectedItem.image.filename) {
    const storageRef = storage.ref();
    storageRef.child('cardImages/' + selectedItem.image.filename).delete();
  }
}

export default editCard;
