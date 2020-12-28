import {
  showErrorToast,
  showSuccessToast,
} from '../../../../notifications/toast';
import { EDIT_CARD } from '../../types';
import editCardApiCall from './editCardApiCall';

import { storage } from '../../../../firebase';

function editCard(card, selectedItem) {
  return async (dispatch, getState) => {
    const success = await editCardApiCall(card);
    deleteOldImageFromStorage(card, selectedItem);
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

function deleteOldImageFromStorage(card, selectedItem) {
  if (card.image.filename !== selectedItem.image.filename) {
    const storageRef = storage.ref();
    storageRef.child('cardImages/' + selectedItem.image.filename).delete();
  }
}

export default editCard;
