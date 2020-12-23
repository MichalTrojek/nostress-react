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

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return {
        meals: action.payload.meals.sort(
          (a, b) => Number(a.menuNumber) - Number(b.menuNumber)
        ),
        childMeals: action.payload.childMeals.sort(
          (a, b) => Number(a.menuNumber) - Number(b.menuNumber)
        ),
        breakfast: action.payload.breakfast.sort(
          (a, b) => Number(a.menuNumber) - Number(b.menuNumber)
        ),
        dataFetched: action.payload.dataFetched,
      };
    case CREATE_MEAL:
      return { ...state, ...action.payload };
    case EDIT_MEAL:
      return { ...state, ...action.payload };
    case DELETE_MEAL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default newsReducer;
