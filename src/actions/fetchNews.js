import { FETCH_NEWS } from './types';
import fetchNewsApiCall from '../api/fetchNewsApiCall';

const fetchNews = () => {
  return (dispatch, getState) => {
    const news = fetchNewsApiCall();
    dispatch({ type: FETCH_NEWS, payload: news });
  };
};

export default fetchNews;
