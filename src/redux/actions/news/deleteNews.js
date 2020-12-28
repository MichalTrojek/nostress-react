import { DELETE_NEWS } from '../types';
import deleteNewsApiCalls from '../../../api/news/deleteNewsApiCall';
import { showSuccessToast, showErrorToast } from '../../../notifications/toast';

const deleteNews = (news) => {
  return async (dispatch, getState) => {
    const succes = deleteNewsApiCalls(news.id);
    if (succes) {
      showSuccessToast('Novinak byla odstraněna!');
      dispatch({
        type: DELETE_NEWS,
        payload: news.id,
      });
    } else {
      showErrorToast('Novinak nebyla odstraněna!');
    }
  };
};

export default deleteNews;
