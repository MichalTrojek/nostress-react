import { CREATE_NEWS } from './types';
import createNewsApiCall from '../api/createNewsApiCall';

const createNews = (heading, newsContent) => {
  return (dispatch, getState) => {
    createNewsApiCall(heading, newsContent);
    dispatch({ type: CREATE_NEWS, payload: newsContent });
  };
};

export default createNews;
