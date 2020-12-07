import { DELETE_NEWS } from '../types';
import deleteNewsApiCalls from '../../../api/news/deleteNewsApiCall';
import { showSuccessToast, showErrorToast } from '../../../notifications/toast';

const deleteNews = (id) => {
  return async (dispatch, getState) => {
    const succes = deleteNewsApiCalls(id);
    if (succes) {
      showSuccessToast('Novinak byla odstraněna!');
      dispatch({
        type: DELETE_NEWS,
        payload: id,
      });
    } else {
      showErrorToast('Novinak nebyla odstraněna!');
    }
  };
};

export default deleteNews;
