import { CREATE_NEWS, FETCH_NEWS } from '../actions/types';

const newsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_NEWS:
      console.log('in reducer', action);
      return [...state, ...action.payload];
    case CREATE_NEWS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default newsReducer;
