import { UPDATE_NEWS } from '../../types';
import updateDataApiCall from '../api/updateDataApiCall';
import {
  showSuccessToast,
  showErrorToast,
} from '../../../../notifications/toast';

const deleteNews = (news) => {
  return async (dispatch, getState) => {
    const filteredNews = getState().data.allNews.filter(
      (item) => item.id !== news.id
    );
    const success = updateDataApiCall({ allNews: filteredNews });
    if (success) {
      showSuccessToast('Novinak byla odstraněna!');
      dispatch({
        type: UPDATE_NEWS,
        payload: filteredNews,
      });
    } else {
      showErrorToast('Novinak nebyla odstraněna!');
    }
  };
};

export default deleteNews;
