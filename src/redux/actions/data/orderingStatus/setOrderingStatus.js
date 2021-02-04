import { UPDATE_ORDERING_STATUS } from '../../types';
import { showErrorToast } from '../../../../notifications/toast';

import updateDataApiCall from '../api/updateDataApiCall';

function setOrderingStatus(status) {
  return async (dispatch, getState) => {
    const success = await updateDataApiCall({ orderingStatus: status });

    if (success) {
      dispatch({
        type: UPDATE_ORDERING_STATUS,
        payload: { status: status },
      });
    } else {
      showErrorToast('Status objednávní se nepodařilo změnit');
    }
  };
}

export default setOrderingStatus;
