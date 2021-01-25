import { START_ORDERING } from '../types';

function startOrdering(orderingStarted) {
  return {
    type: START_ORDERING,
    payload: orderingStarted,
  };
}

export default startOrdering;
