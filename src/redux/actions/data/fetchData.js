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
    dataExist(data.cards) ||
    dataExist(data.menu) ||
    dataExist(data.soups) ||
    dataExist(data.news)
  );
}
const dataExist = (array) => {
  return array && array.lenght > 0;
};

export default fetchData;
