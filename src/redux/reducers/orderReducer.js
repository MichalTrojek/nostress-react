import {
  UPDATE_ORDER,
  ORDER_METHOD,
  SAVE_CUSTOMER_INFO,
  CREATE_ORDER,
  START_ORDERING,
  RESET_ORDERS,
  SET_TOTAL,
} from '../actions/types';

const initialState = {
  id: '',
  total: { totalPrice: 0, totalAmount: 0, soupBoxes: 0, mealBoxes: 0 },
  orderMethod: '',
  items: [],
  customerInfo: { name: '', phoneNumber: '', email: '', text: '' },
  orderingStarted: { status: false, menuType: '' },
};
function orderReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ORDER:
      return { ...state, items: action.payload };
    case ORDER_METHOD:
      return { ...state, orderMethod: action.payload };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    case SAVE_CUSTOMER_INFO:
      return { ...state, customerInfo: action.payload };
    case CREATE_ORDER:
      return state;
    case START_ORDERING:
      return { ...state, orderingStarted: action.payload };
    case RESET_ORDERS:
      return initialState;
    default:
      return state;
  }
}

export default orderReducer;
