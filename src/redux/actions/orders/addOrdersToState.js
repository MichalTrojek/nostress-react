import { ADD_TO_ORDER } from '../types';

function addOrdersToState(order) {
  return {
    type: ADD_TO_ORDER,
    payload: order,
  };
}

export default addOrdersToState;
