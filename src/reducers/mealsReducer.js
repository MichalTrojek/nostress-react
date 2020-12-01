import { FETCH_MEALS } from '../actions/types';

const newsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default newsReducer;
