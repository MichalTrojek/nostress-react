import {
  ADD_TO_ORDER,
  SELECT_MENU,
  SELECT_FORM,
  REMOVE_FROM_ORDER,
} from '../actions/types';

const initializeState = {
  selectedMenu: true,
  selectedForm: 'test',
  items: [],
};
function orderReducer(state = initializeState, action) {
  switch (action.type) {
    case ADD_TO_ORDER:
      const newItems = state.items.filter(
        (order) => order.name !== action.payload.name
      );
      newItems.push(action.payload);
      return { ...state, items: newItems };
    case SELECT_MENU:
      return { ...state, selectedMenu: action.payload };
    case REMOVE_FROM_ORDER:
      return {
        ...state,
        items: state.items.filter((item) => item.name !== action.payload.name),
      };
    case SELECT_FORM:
      return { ...state, selectedForm: action.payload };
    default:
      return state;
  }
}

export default orderReducer;
