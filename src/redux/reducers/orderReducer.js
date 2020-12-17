import {
  ADD_TO_ORDER,
  SELECT_FORM,
  REMOVE_FROM_ORDER,
  SET_TOTAL_PRICE,
} from '../actions/types';

const initializeState = {
  totalPrice: 0,
  selectedForm: '',
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
    case REMOVE_FROM_ORDER:
      return {
        ...state,
        items: state.items.filter((item) => item.name !== action.payload.name),
      };
    case SELECT_FORM:
      return { ...state, selectedForm: action.payload };
    case SET_TOTAL_PRICE:
      return { ...state, totalPrice: action.payload };
    default:
      return state;
  }
}

export default orderReducer;
