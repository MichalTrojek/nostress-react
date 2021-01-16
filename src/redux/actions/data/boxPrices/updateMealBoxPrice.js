import { UPDATE_MEAL_BOX_PRICES } from '../../types';
import {
  showErrorToast,
  showSuccessToast,
} from '../../../../notifications/toast';
import updateDataApiCall from '../api/updateDataApiCall';

function updateMealBoxPrice(mealBoxPrice) {
  return async (dispatch, getState) => {
    const allBoxPrices = {
      ...getState().data.boxPrices,
      ...{ mealBoxPrice: mealBoxPrice },
    };
    console.log(allBoxPrices);
    const success = await updateDataApiCall({ boxPrices: allBoxPrices });
    if (success) {
      dispatch({
        type: UPDATE_MEAL_BOX_PRICES,
        payload: allBoxPrices,
      });
      showSuccessToast('Cena obalu byla úspěšně uloženo.');
    } else {
      showErrorToast('Cenu obalu se nepodařilo uložit.');
    }
  };
}

export default updateMealBoxPrice;
