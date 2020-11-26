import { CREATE_NEWS, FETCH_NEWS } from '../actions/types';

const newsReducer = (state = ['test1', 'test2'], action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return state;
    case CREATE_NEWS:
      state.push(action.payload);
      return [...state];
    default:
      return state;
  }
};

export default newsReducer;
