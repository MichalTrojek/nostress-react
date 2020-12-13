import { ADD_TO_ORDER, SELECT_MENU } from '../actions/types';

const initializeState = {
  selectedMenu: true,
  items: [],
};
function orderReducer(state = initializeState, action) {
  switch (action.type) {
    case ADD_TO_ORDER:
      console.log(action.payload);
      return { ...state, items: action.payload };
    case SELECT_MENU:
      return { ...state, selectedMenu: action.payload };
    default:
      return state;
  }
}

export default orderReducer;
