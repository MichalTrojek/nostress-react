import { FETCH_SOUPS } from '../types';
import fetchSoupsApiCall from '../../../api/soups/fetchSoupsApiCall';
function fetchSoups() {
  return async (dispatch, getState) => {
    const data = await fetchSoupsApiCall();
    if (data) {
      dispatch({
        type: FETCH_SOUPS,
        payload: data,
      });
    } else {
    }
  };
}

export default fetchSoups;
