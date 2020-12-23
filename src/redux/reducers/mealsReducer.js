import {
  FETCH_MEALS,
  CREATE_MEAL,
  EDIT_MEAL,
  DELETE_MEAL,
} from '../actions/types';

const initialState = {
  meals: [],
  childMeals: [],
  breakfast: [],
  dataFetched: false,
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return {
        meals: sortMenuItemsByNumber(action.payload.meals),
        childMeals: sortMenuItemsByNumber(action.payload.childMeals),
        breakfast: sortMenuItemsByNumber(action.payload.breakfast),
        dataFetched: action.payload.dataFetched,
      };

    case CREATE_MEAL:
      const key = Object.keys(action.payload)[0];
      const values = Object.values(action.payload)[0];
      const menu = {};
      menu[key] = sortMenuItemsByNumber(values);
      return { ...state, ...menu };
    case EDIT_MEAL:
      return {
        ...state,
        ...sortOutMenusByType(action.payload),
      };
    case DELETE_MEAL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

function sortOutMenusByType(allMeals = []) {
  const meals = [];
  const childMeals = [];
  const breakfast = [];

  allMeals.forEach((meal) => {
    if (meal.type === 'isChildMeal') {
      childMeals.push(meal);
    } else if (meal.type === 'isBreakfastMeal') {
      breakfast.push(meal);
    } else {
      meals.push(meal);
    }
  });

  return {
    meals: sortMenuItemsByNumber(meals),
    childMeals: sortMenuItemsByNumber(childMeals),
    breakfast: sortMenuItemsByNumber(breakfast),
  };
}

function sortMenuItemsByNumber(menu) {
  return menu.sort((a, b) => a.menuNumber - b.menuNumber);
}

export default mealsReducer;
