import { CREATE_ORDER } from '../types';
import { showErrorToast } from '../../../../notifications/toast';
import createOrderApiCall from './api/createOrderApiCall';

import getOrderNumberApiCall from './api/getOrderNumberApiCall';

function createOrder(order) {
  return async (dispatch, getState) => {
    const orderNumber = await getOrderNumberApiCall();
    order = { ...order, orderNumber: orderNumber.number };
    const id = await createOrderApiCall(order);
    if (id) {
      dispatch({
        type: CREATE_ORDER,
        payload: { ...order, id: id },
      });
    } else {
      showErrorToast('Objednávku se nepodařilo odeslat');
    }
  };
}

export default createOrder;
