import { ORDER_METHOD } from '../types';
function orderMethod(orderMethod) {
  return {
    type: ORDER_METHOD,
    payload: orderMethod,
  };
}

export default orderMethod;
