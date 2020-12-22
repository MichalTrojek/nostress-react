import { FETCH_NEWS } from '../types';
import fetchNewsApiCall from '../../../api/news/fetchNewsApiCall';

const fetchNews = () => {
  return async (dispatch, getState) => {
    if (getState().news.length === 0) {
      let data = await fetchNewsApiCall();
      dispatch({ type: FETCH_NEWS, payload: data });
    }
  };
};

export default fetchNews;
