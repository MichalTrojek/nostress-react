import { DELETE_MEAL } from '../types';
import deleteMealApiCall from '../../../api/meals/deleteMealApiCall';
import { showErrorToast, showSuccessToast } from '../../../notifications/toast';

function deleteMeal(meal) {
  return async (dispatch, getState) => {
    const success = await deleteMealApiCall(meal.id);
    if (success) {
      showSuccessToast('Jidlo bylo vymazáno');
      dispatch({
        type: DELETE_MEAL,
        payload: deleteMealFromMenu(meal, getState),
      });
    } else {
      showErrorToast('Jidlo se nepodařilo vymazat.');
    }
  };
}

const deleteMealFromMenu = (mealToDelete, getState) => {
  switch (mealToDelete.type) {
    case 'isChildMeal':
      return deleteMealByType(
        mealToDelete.id,
        getState().menu.childMeals,
        'childMeals'
      );
    case 'isWeeklyMeal':
      return deleteMealByType(mealToDelete.id, getState().menu.meals, 'meals');
    case 'isBreakfastMeal':
      return deleteMealByType(
        mealToDelete.id,
        getState().menu.breakfast,
        'breakfast'
      );
  }
};

const deleteMealByType = (id, menu, key) => {
  const menuWithouteditMeal = menu.filter((meal) => meal.id !== id);
  let returnObject = {};
  returnObject[key] = menuWithouteditMeal;
  return returnObject;
};

export default deleteMeal;
