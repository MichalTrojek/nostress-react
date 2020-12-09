import { FETCH_MEALS, CREATE_MEAL } from '../actions/types';

const newsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MEALS:
      console.log(state);
      return [...state, ...action.payload];
    case CREATE_MEAL:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default newsReducer;
