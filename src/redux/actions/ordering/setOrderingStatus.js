import { SET_ORDERING_STATUS } from '../types';
import { showErrorToast } from '../../../notifications/toast';

import setOrderingStatusApiCall from './api/setOrderingStatusApiCall';

function setOrderingStatus(status) {
  return async (dispatch, getState) => {
    const success = await setOrderingStatusApiCall(status);
    if (success) {
      dispatch({
        type: SET_ORDERING_STATUS,
        payload: { status: status },
      });
    } else {
      showErrorToast('Status objednávní se nepodařilo změnit');
    }
  };
}

export default setOrderingStatus;
