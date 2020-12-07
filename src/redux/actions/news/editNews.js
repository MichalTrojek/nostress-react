import { EDIT_NEWS } from '../types';
import editNewsApiCall from '../../../api/news/editNewsApiCall';
import { showErrorToast, showSuccessToast } from '../../../notifications/toast';

const editNews = (id, heading, newsContent, buttonText) => {
  return (dispatch, getState) => {
    const success = editNewsApiCall(id, heading, newsContent, buttonText);
    if (success) {
      dispatch({
        type: EDIT_NEWS,
        payload: {
          id: id,
          heading: heading,
          content: newsContent,
          button: buttonText,
        },
      });

      showSuccessToast('Novinka byla upravena!');
    } else {
      showErrorToast('Novinku se nepodařilo upravit1');
    }
  };
};

export default editNews;
