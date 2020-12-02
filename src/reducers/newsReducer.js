import {
  CREATE_NEWS,
  FETCH_NEWS,
  DELETE_NEWS,
  EDIT_NEWS,
} from '../actions/types';

const newsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return [...state, ...action.payload];
    case CREATE_NEWS:
      return [...state, action.payload];
    case DELETE_NEWS:
      return state.filter((item) => item.id !== action.payload);
    case EDIT_NEWS:
      state = state.filter((item) => item.id !== action.payload.id);
      return [...state, action.payload];
    default:
      return state;
  }
};

export default newsReducer;
