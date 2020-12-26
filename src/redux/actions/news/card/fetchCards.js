import { FETCH_CARDS } from '../../types';
import fetchCardsApiCall from './fetchCardsApiCall';

function fetchCards() {
  return async (dispatch, getState) => {
    if (getState().cards.length === 0) {
      const data = await fetchCardsApiCall();
      console.log(data);
      dispatch({
        type: FETCH_CARDS,
        payload: data,
      });
    }
  };
}

export default fetchCards;
