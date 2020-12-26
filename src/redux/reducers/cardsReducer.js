import { CREATE_CARD, EDIT_CARD } from '../actions/types';

const initialState = {
  items: [],
};

function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CARD:
      const newItems = state.items.push(action.payload);
      return { items: newItems };
    case EDIT_CARD:
      const removedEdited = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return { item: [...removedEdited, action.payload] };
    default:
      return state;
  }
}

export default cardsReducer;
