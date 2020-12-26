import { CREATE_CARD, EDIT_CARD, FETCH_CARDS } from '../actions/types';

function cardsReducer(state = [], action) {
  switch (action.type) {
    case CREATE_CARD:
      const newItems = state;
      newItems.push(action.payload);
      return newItems;
    case EDIT_CARD:
      const removedEdited = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      removedEdited.push(action.payload);
      return removedEdited;
    case FETCH_CARDS:
      console.log(action.payload);
      return [...action.payload];
    default:
      return state;
  }
}

export default cardsReducer;
