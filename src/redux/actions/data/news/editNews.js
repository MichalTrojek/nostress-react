import { UPDATE_NEWS } from '../../types';

import {
  showErrorToast,
  showSuccessToast,
} from '../../../../notifications/toast';
import updateDataApiCall from '../api/updateDataApiCall';

const editNews = (news) => {
  return (dispatch, getState) => {
    const filteredNews = getState().data.allNews.filter(
      (item) => item.id !== news.id
    );
    filteredNews.push(news);
    const success = updateDataApiCall({ allNews: filteredNews });
    if (success) {
      dispatch({
        type: UPDATE_NEWS,
        payload: filteredNews,
      });
      showSuccessToast('Novinka byla upravena!');
    } else {
      showErrorToast('Novinku se nepodařilo upravit1');
    }
  };
};

export default editNews;
