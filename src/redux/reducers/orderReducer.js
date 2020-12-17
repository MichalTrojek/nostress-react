import {
  ADD_TO_ORDER,
  SELECT_FORM,
  REMOVE_FROM_ORDER,
  SET_TOTAL_PRICE,
  SAVE_CUSTOMER_INFO,
} from '../actions/types';

const initializeState = {
  totalPrice: 0,
  selectedForm: '',
  items: [],
  customerInfo: { name: '', phoneNumber: '', email: '', text: '' },
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
    case SAVE_CUSTOMER_INFO:
      return { ...state, customerInfo: action.payload };
    default:
      return state;
  }
}

export default orderReducer;
