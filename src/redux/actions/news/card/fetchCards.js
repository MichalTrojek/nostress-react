import { FETCH_CARDS } from '../../types';
import fetchCardsApiCall from './fetchCardsApiCall';

const fetchCards = () => {
  return async (dispatch, getState) => {
    if (getState().cards.length === 0) {
      let data = await fetchCardsApiCall();
      dispatch({
        type: FETCH_CARDS,
        payload: data,
      });
    }
  };
};

export default fetchCards;
