import { EDIT_NEWS } from '../types';
import editNewsApiCall from '../../../api/news/editNewsApiCall';
import { showErrorToast, showSuccessToast } from '../../../notifications/toast';

const editNews = (news) => {
  return (dispatch, getState) => {
    const success = editNewsApiCall(news);
    if (success) {
      dispatch({
        type: EDIT_NEWS,
        payload: news,
      });

      showSuccessToast('Novinka byla upravena!');
    } else {
      showErrorToast('Novinku se nepodařilo upravit1');
    }
  };
};

export default editNews;
