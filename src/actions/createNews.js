import { CREATE_NEWS } from './types';
import createNewsApiCall from '../api/createNewsApiCall';

const createNews = (heading, newsContent) => {
  return async (dispatch, getState) => {
    const id = await createNewsApiCall(heading, newsContent);
    dispatch({
      type: CREATE_NEWS,
      payload: { id: id, heading: heading, content: newsContent },
    });
  };
};

export default createNews;
