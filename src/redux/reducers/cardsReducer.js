import {
  CREATE_CARD,
  EDIT_CARD,
  FETCH_CARDS,
  DELETE_CARD,
} from '../actions/types';

function cardsReducer(state = [], action) {
  switch (action.type) {
    case CREATE_CARD:
      const newItems = state;
      newItems.push(action.payload);
      return newItems;
    case EDIT_CARD:
      const removedEdited = state.filter(
        (item) => item.id !== action.payload.id
      );
      removedEdited.push(action.payload);
      return removedEdited;
    case FETCH_CARDS:
      return [...action.payload];
    case DELETE_CARD:
      console.log('delete card', action.payload);

      const removed = state.filter((item) => item.id !== action.payload);
      console.log(removed);
      return removed;
    default:
      return state;
  }
}

export default cardsReducer;
