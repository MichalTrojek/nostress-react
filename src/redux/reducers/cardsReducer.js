import { CREATE_CARD } from '../actions/types';

const initialState = {
  items: [],
};

function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CARD:
      const newItems = state.items.push(action.payload);
      return { items: newItems };
    default:
      return state;
  }
}

export default cardsReducer;
