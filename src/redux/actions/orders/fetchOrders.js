import { FETCH_ORDERS } from '../types';
import fetchOrdersApiCall from '../../../api/order/fetchOrdersApiCall';

function fetchOrders() {
  return async (dispatch, getState) => {
    const data = await fetchOrdersApiCall();
    dispatch({
      type: FETCH_ORDERS,
      payload: data,
    });
  };
}

export default fetchOrders;
