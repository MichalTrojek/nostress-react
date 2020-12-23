import { EDIT_MEAL } from '../types';
import editMealApiCall from '../../../api/meals/editMealApiCall';
import { showErrorToast, showSuccessToast } from '../../../notifications/toast';

const editMenu = (editedMeal, getState) => {
  switch (editedMeal.type) {
    case 'isWeeklyMeal':
      return editMenuByType(editedMeal, getState().menu.meals, 'meals');
    case 'isBreakfastMeal':
      return editMenuByType(editedMeal, getState().menu.breakfast, 'breakfast');
    default:
      return editMenuByType(
        editedMeal,
        getState().menu.childMeals,
        'childMeals'
      );
  }
};

const editMenuByType = (editedMeal, menu, key) => {
  const menuWithoutEditedMeal = menu.filter(
    (meal) => meal.id !== editedMeal.id
  );
  let returnObject = {};
  returnObject[key] = [...menuWithoutEditedMeal, editedMeal];
  returnObject[key].sort((a, b) => Number(a.menuNumber) - Number(b.menuNumber));
  return returnObject;
};

function editMeal(meal) {
  return async (dispatch, getState) => {
    const success = await editMealApiCall(meal);
    if (success) {
      const editedMenu = editMenu(meal, getState);
      dispatch({ type: EDIT_MEAL, payload: editedMenu });
      showSuccessToast('Položka byla upravena.');
    } else {
      showErrorToast('Položka nebyla uložena do databáze');
    }
  };
}

export default editMeal;
