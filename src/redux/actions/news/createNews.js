import { CREATE_NEWS } from '../types';
import createNewsApiCall from '../../../api/news/createNewsApiCall';
import { showErrorToast, showSuccessToast } from '../../../notifications/toast';

const createNews = (news) => {
  console.log(news);
  return async (dispatch, getState) => {
    const id = await createNewsApiCall(news);
    if (id) {
      dispatch({
        type: CREATE_NEWS,
        payload: {
          ...news,
          id: id,
        },
      });
      showSuccessToast('Novinka byla uspešně uložena.');
    } else {
      showErrorToast('Novinku se nepodařilo uložit.');
    }
  };
};

export default createNews;
