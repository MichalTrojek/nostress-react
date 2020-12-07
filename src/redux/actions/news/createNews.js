import { CREATE_NEWS } from '../types';
import createNewsApiCall from '../../../api/news/createNewsApiCall';
import { showErrorToast, showSuccessToast } from '../../../notifications/toast';

const createNews = (heading, newsContent, buttonText) => {
  return async (dispatch, getState) => {
    const success = await createNewsApiCall(heading, newsContent, buttonText);
    if (success) {
      dispatch({
        type: CREATE_NEWS,
        payload: {
          id: success,
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
