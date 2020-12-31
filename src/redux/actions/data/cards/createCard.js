import {
  showErrorToast,
  showSuccessToast,
} from '../../../../notifications/toast';
import { UPDATE_CARDS } from '../../types';
import updateDataApiCall from '../api/updateDataApiCall';

function createCard(card) {
  return async (dispatch, getState) => {
    const allCards = [...getState().data.cards, card];
    const success = await updateDataApiCall({ cards: allCards });
    if (success) {
      dispatch({
        type: UPDATE_CARDS,
        payload: allCards,
      });
      showSuccessToast('Novinka byla uložena');
    } else {
      showErrorToast('Novinku se nepodařilo uložit do databáze');
    }
  };
}

export default createCard;
