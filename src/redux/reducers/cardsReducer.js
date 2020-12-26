import {
  CREATE_CARD,
  EDIT_CARD,
  FETCH_CARDS,
  DELETE_CARD,
} from '../actions/types';

function cardsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CARDS:
      return [...state, ...action.payload];
    case CREATE_CARD:
      return [...state, action.payload];
    case DELETE_CARD:
      const stateAfterDelete = state.filter(
        (item) => item.id !== action.payload
      );
      return stateAfterDelete;
    case EDIT_CARD:
      const newState = state.filter((item) => item.id !== action.payload.id);
      return [...newState, action.payload];
    default:
      return state;
  }
}

export default cardsReducer;
