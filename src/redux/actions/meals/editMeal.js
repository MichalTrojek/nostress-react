import { EDIT_MEAL } from '../types';
import editMealApiCall from '../../../api/meals/editMealApiCall';
import { showErrorToast, showSuccessToast } from '../../../notifications/toast';

const editMenus = (editedMeal, getState) => {
  const mergedMenus = mergeMenus(
    getState().menu.meals,
    getState().menu.childMeals,
    getState().menu.breakfast
  );
  const mergedMenuWithoutEditedMeal = removeFromMergedMenu(
    mergedMenus,
    editedMeal
  );
  return [...mergedMenuWithoutEditedMeal, editedMeal];
};

function mergeMenus(mealsMenu, childsMenu, breakfastMenu) {
  return [...mealsMenu, ...childsMenu, ...breakfastMenu];
}

function removeFromMergedMenu(menu, item) {
  return menu.filter((meal) => meal.id !== item.id);
}

function editMeal(meal) {
  return async (dispatch, getState) => {
    const success = await editMealApiCall(meal);
    if (success) {
      const editedMenu = editMenus(meal, getState);
      dispatch({ type: EDIT_MEAL, payload: editedMenu });
      showSuccessToast('Položka byla upravena.');
    } else {
      showErrorToast('Položka nebyla uložena do databáze');
    }
  };
}

export default editMeal;
