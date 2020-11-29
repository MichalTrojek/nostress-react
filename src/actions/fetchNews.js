import { FETCH_NEWS } from './types';
import fetchNewsApiCall from '../api/fetchNewsApiCall';
import { db } from '../firebase';

const fetchNews = () => {
  return async (dispatch, getState) => {
    const data = await fetchNewsApiCall();
    dispatch({ type: FETCH_NEWS, payload: data });
  };
};

export default fetchNews;
