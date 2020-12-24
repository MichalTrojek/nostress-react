import {
  UPDATE_ORDER,
  SELECT_FORM,
  SET_TOTAL_PRICE,
  SAVE_CUSTOMER_INFO,
  CREATE_ORDER,
  START_ORDERING,
  RESET_ORDERS,
} from '../actions/types';

const initializeState = {
  id: '',
  totalPrice: 0,
  orderMethod: '',
  items: [],
  customerInfo: { name: '', phoneNumber: '', email: '', text: '' },
  orderingStarted: { status: false, menuType: '' },
};
function orderReducer(state = initializeState, action) {
  switch (action.type) {
    case UPDATE_ORDER:
      return { ...state, items: action.payload };
    case SELECT_FORM:
      return { ...state, orderMethod: action.payload };
    case SET_TOTAL_PRICE:
      return { ...state, totalPrice: action.payload };
    case SAVE_CUSTOMER_INFO:
      return { ...state, customerInfo: action.payload };
    case CREATE_ORDER:
      return state;
    case START_ORDERING:
      return { ...state, orderingStarted: action.payload };
    case RESET_ORDERS:
      return { ...state, items: [] };
    default:
      return state;
  }
}

export default orderReducer;
