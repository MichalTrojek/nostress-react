import { UPDATE_ORDERING_STATUS } from '../../types';
import { showErrorToast } from '../../../../notifications/toast';

import updateDataApiCall from '../api/updateDataApiCall';

function setOrderingStatus(orderingStatus) {
  return async (dispatch, getState) => {
    const success = await updateDataApiCall({ orderingStatus: orderingStatus });

    if (success) {
      dispatch({
        type: UPDATE_ORDERING_STATUS,
        payload: orderingStatus,
      });
    } else {
      showErrorToast('Status objednávní se nepodařilo změnit');
    }
  };
}

export default setOrderingStatus;
