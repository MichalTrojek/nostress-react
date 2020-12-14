import {
  ADD_TO_ORDER,
  SELECT_MENU,
  RESET_ORDER,
  SELECT_FORM,
} from '../actions/types';

const initializeState = {
  selectedMenu: true,
  selectedForm: 'test',
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
    case SELECT_FORM:
      return { ...state, selectedForm: action.payload };
    default:
      return state;
  }
}

export default orderReducer;
