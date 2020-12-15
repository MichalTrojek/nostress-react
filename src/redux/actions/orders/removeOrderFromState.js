import { REMOVE_FROM_ORDER } from '../types';

function removeOrderFromState(order) {
  return {
    type: REMOVE_FROM_ORDER,
    payload: order,
  };
}

export default removeOrderFromState;
