import { CREATE_ORDER } from '../types';
import { showErrorToast } from '../../../notifications/toast';
import createOrderApiCall from '../../../api/order/createOrderApiCall';

function createOrder(order) {
  return async (dispatch, getState) => {
    const id = await createOrderApiCall(order);
    console.log(id);
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
