import { CREATE_NEWS } from './types';
import createNewsApiCall from '../api/createNewsApiCall';

const createNews = (newsContent) => {
  return (dispatch, getState) => {
    createNewsApiCall(newsContent);
    dispatch({ type: CREATE_NEWS, payload: newsContent });
  };
};

export default createNews;
