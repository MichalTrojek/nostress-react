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
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return {
        ...state,
        meals: action.payload.meals,
        childMeals: action.payload.breakfast,
        breakfast: action.payload.breakfast,
      };
    case CREATE_MEAL:
      return [...state, action.payload];
    case EDIT_MEAL:
      const newState = state.filter((item) => item.id !== action.payload.id);
      return [...newState, action.payload];
    case DELETE_MEAL:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default newsReducer;
