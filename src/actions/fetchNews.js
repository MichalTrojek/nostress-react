import { FETCH_NEWS } from './types';
import fetchNewsApiCall from '../api/fetchNewsApiCall';
import { db } from '../firebase';

const fetchNews = () => {
  return async (dispatch, getState) => {
    // const promise = db
    //   .collection('news')
    //   .get()
    //   .then((snapshot) => {
    //     const data = [];
    //     snapshot.forEach((doc) => {
    //       data.push(doc.data());
    //     });
    //     return data;
    //   });

    // const data = await promise;

    const data = await fetchNewsApiCall();

    dispatch({ type: FETCH_NEWS, payload: data });
  };
};

export default fetchNews;
