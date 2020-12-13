import { REMOVE_FROM_ORDER } from '../types';

function removeFromOrder(order) {
  return {
    type: REMOVE_FROM_ORDER,
    payload: order,
  };
}

export default removeFromOrder;
