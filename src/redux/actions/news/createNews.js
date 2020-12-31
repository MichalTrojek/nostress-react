import { CREATE_NEWS } from '../types';
import updateNewsApiCall from './api/updateNewsApiCall';
import { showErrorToast, showSuccessToast } from '../../../notifications/toast';

const createNews = (news) => {
  return async (dispatch, getState) => {
    const allNews = [...getState().news, news];
    const success = updateNewsApiCall(allNews);
    if (success) {
      dispatch({
        type: CREATE_NEWS,
        payload: {
          ...news,
        },
      });
      showSuccessToast('Novinka byla uspešně uložena.');
    } else {
      showErrorToast('Novinku se nepodařilo uložit.');
    }
  };
};

export default createNews;
