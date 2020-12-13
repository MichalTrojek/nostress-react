import { ADD_TO_ORDER, REMOVE_FROM_ORDER } from '../actions/types';

const initializeState = {
  items: [],
};
function orderReducer(state = initializeState, action) {
  switch (action.type) {
    case ADD_TO_ORDER:
      console.log(action.payload);
      return { ...state, items: action.payload };
    case REMOVE_FROM_ORDER:
      return state;
    default:
      return state;
  }
}

export default orderReducer;
