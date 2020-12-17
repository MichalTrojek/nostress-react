import { SET_TOTAL_PRICE } from '../types';

function setTotalPrice(totalPrice) {
  return {
    type: SET_TOTAL_PRICE,
    payload: totalPrice,
  };
}

export default setTotalPrice;
