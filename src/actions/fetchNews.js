import { FETCH_NEWS } from './types';
import fetchNewsApiCall from '../api/fetchNewsApiCall';

const fetchNews = () => {
  return async (dispatch, getState) => {
    let data = await fetchNewsApiCall();

    data = data.map((item) => {
      return {
        heading: item.heading,
        content: JSON.parse(item.content),
      };
    });

    dispatch({ type: FETCH_NEWS, payload: data });
  };
};

export default fetchNews;
