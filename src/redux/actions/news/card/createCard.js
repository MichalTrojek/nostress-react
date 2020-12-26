import {
  showErrorToast,
  showSuccessToast,
} from '../../../../notifications/toast';
import { CREATE_CARD } from '../../types';
import createCardApiCall from './createCardApiCall';

function createCard(card) {
  return async (dispatch, getState) => {
    const id = await createCardApiCall(card);
    if (id) {
      dispatch({
        type: CREATE_CARD,
        payload: { ...card, id: id },
      });
      showSuccessToast('Novinka byla uložena');
    } else {
      showErrorToast('Novinku se nepodařilo uložit do databáze');
    }
  };
}

export default createCard;
