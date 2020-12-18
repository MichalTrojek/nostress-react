import {
  UPDATE_ORDER,
  SELECT_FORM,
  SET_TOTAL_PRICE,
  SAVE_CUSTOMER_INFO,
  CREATE_ORDER,
  START_ORDERING,
} from '../actions/types';

const initializeState = {
  id: '',
  totalPrice: 0,
  selectedForm: '',
  items: [],
  customerInfo: { name: '', phoneNumber: '', email: '', text: '' },
  orderingStarted: { status: false, orderType: '' },
};
function orderReducer(state = initializeState, action) {
  switch (action.type) {
    case UPDATE_ORDER:
      return { ...state, items: action.payload };
    case SELECT_FORM:
      return { ...state, selectedForm: action.payload };
    case SET_TOTAL_PRICE:
      return { ...state, totalPrice: action.payload };
    case SAVE_CUSTOMER_INFO:
      return { ...state, customerInfo: action.payload };
    case CREATE_ORDER:
      return { ...state, customerInfo: action.payload };
    case START_ORDERING:
      return { ...state, orderingStarted: action.payload };
    default:
      return state;
  }
}

export default orderReducer;
