import { FETCH_ORDERS } from '../types';

function fetchOrders() {
  return async (dispatch, getState) => {
    const data = '';
    return {
      type: FETCH_ORDERS,
      payload: data,
    };
  };
}

export default fetchOrders;
