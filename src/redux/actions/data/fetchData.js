import { FETCH_DATA } from '../types';
import fetchDataApiCall from './api/fetchDataApiCall';

const fetchData = () => {
  return async (dispatch, getState) => {
    if (!dataFetched(getState().data)) {
      console.log('fetching data');
      let data = await fetchDataApiCall();
      dispatch({ type: FETCH_DATA, payload: data });
    } else {
      console.log('not fetching data');
    }
  };
};

function dataFetched(data) {
  return (
    data.cards.length > 0 ||
    data.menu.length > 0 ||
    data.soups.length > 0 ||
    data.news.length > 0
  );
}

export default fetchData;
