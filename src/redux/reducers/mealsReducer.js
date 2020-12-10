import {
  FETCH_MEALS,
  CREATE_MEAL,
  EDIT_MEAL,
  DELETE_MEAL,
} from '../actions/types';

const newsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MEALS:
      console.log('fetch meals', action.payload);
      return [...state, ...action.payload];
    case CREATE_MEAL:
      console.log('create meal', action.payload);
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
