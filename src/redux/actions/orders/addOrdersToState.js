import { ADD_TO_ORDER } from '../types';

function addOrdersToState(orders) {
  return {
    type: ADD_TO_ORDER,
    payload: orders,
  };
}

export default addOrdersToState;
