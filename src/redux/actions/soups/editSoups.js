import { EDIT_SOUPS } from '../types';
import editSoupsApiCall from '../../../api/soups/editSoupsApiCall';

function editSoups(soups) {
  return async (dispatch, getState) => {
    const success = editSoupsApiCall(soups);
    if (success) {
      dispatch({
        type: EDIT_SOUPS,
        payload: soups,
      });
    }
  };
}

export default editSoups;
