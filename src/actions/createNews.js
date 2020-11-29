import { CREATE_NEWS } from './types';
import createNewsApiCall from '../api/createNewsApiCall';

const createNews = (heading, newsContent) => {
  return (dispatch, getState) => {
    createNewsApiCall(heading, newsContent);
    dispatch({
      type: CREATE_NEWS,
      payload: { heading: heading, content: newsContent },
    });
  };
};

export default createNews;
