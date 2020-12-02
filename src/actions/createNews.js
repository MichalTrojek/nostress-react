import { CREATE_NEWS } from './types';
import createNewsApiCall from '../api/createNewsApiCall';

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
    }
  };
};

export default createNews;
