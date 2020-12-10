import { FETCH_MEALS, CREATE_MEAL, EDIT_MEAL } from '../actions/types';

const newsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return [...state, ...action.payload];
    case CREATE_MEAL:
      return [...state, action.payload];
    case EDIT_MEAL:
      const newState = state.filter((item) => item.id !== action.payload.id);
      return [...newState, action.payload];
    default:
      return state;
  }
};

export default newsReducer;
