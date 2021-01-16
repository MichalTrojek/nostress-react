import { SET_TOTAL } from '../types';

function setTotal(total) {
  return {
    type: SET_TOTAL,
    payload: total,
  };
}

export default setTotal;
