import { UPDATE_NEWS } from '../../types';
import updateDataApiCall from '../api/updateDataApiCall';
import {
  showErrorToast,
  showSuccessToast,
} from '../../../../notifications/toast';

const createNews = (news) => {
  return async (dispatch, getState) => {
    const allNews = [...getState().data.allNews, news];
    const success = await updateDataApiCall({ allNews: allNews });
    if (success) {
      dispatch({
        type: UPDATE_NEWS,
        payload: allNews,
      });
      showSuccessToast('Novinka byla uspešně uložena.');
    } else {
      showErrorToast('Novinku se nepodařilo uložit.');
    }
  };
};

export default createNews;
