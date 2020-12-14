import { ADD_TO_ORDER, SELECT_MENU, RESET_ORDER } from '../actions/types';

const initializeState = {
  selectedMenu: true,
  items: [],
};
function orderReducer(state = initializeState, action) {
  switch (action.type) {
    case ADD_TO_ORDER:
      return { ...state, items: action.payload };
    case SELECT_MENU:
      return { ...state, selectedMenu: action.payload };
    case RESET_ORDER:
      return { ...state, items: [] };
    default:
      return state;
  }
}

export default orderReducer;
