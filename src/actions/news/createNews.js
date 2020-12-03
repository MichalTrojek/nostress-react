import { CREATE_NEWS } from '../types';
import createNewsApiCall from '../../api/news/createNewsApiCall';
import { showErrorToast, showSuccessToast } from '../../notifications/toast';

const createNews = (heading, newsContent, buttonText) => {
  return async (dispatch, getState) => {
    const id = await createNewsApiCall(heading, newsContent, buttonText);
    if (id) {
      dispatch({
        type: CREATE_NEWS,
        payload: {
          id: id,
          heading: heading,
          content: newsContent,
          button: buttonText,
        },
      });
      showSuccessToast('Novinka byla uspešně uložena.');
    } else {
      showErrorToast('Novinku se nepodařilo uložit.');
    }
  };
};

export default createNews;
