import { CREATE_MEAL } from '../types';
import { showErrorToast, showSuccessToast } from '../../../notifications/toast';
import createMealApiCall from '../../../api/meals/createMealApiCall';

function createMeal(meal) {
  return async (dispatch, getState) => {
    const id = await createMealApiCall(meal);
    if (id) {
      const newMeal = { ...meal, id: id };

      dispatch({
        type: CREATE_MEAL,
        payload: addToMenuByType(newMeal, getState),
      });
      showSuccessToast('Jidlo bylo úspěšně uloženo.');
    } else {
      showErrorToast('Jidlo se nepodařilo uložit.');
    }
  };
}

function addToMenuByType(newMeal, getState) {
  switch (newMeal.type) {
    case 'isChildMeal':
      return addMealToMenu(newMeal, getState().menu.childMeals, 'childMeals');
    case 'isWeeklyMeal':
      return addMealToMenu(newMeal, getState().menu.meals, 'meals');
    case 'isBreakfastMeal':
      return addMealToMenu(newMeal, getState().menu.breakfast, 'breakfast');
  }
}

function addMealToMenu(newMeal, menu, menuType) {
  const returnObject = {};
  const copy = menu.map((item) => item);
  returnObject[menuType] = copy;
  returnObject[menuType].push(newMeal);
  return returnObject;
}

export default createMeal;
