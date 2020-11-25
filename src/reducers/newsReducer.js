import { CREATE_NEWS, FETCH_NEWS } from '../actions/types';

const INITIAL_STATE = {
  allNews: [],
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return state.allNews;
    case CREATE_NEWS:
      console.log(state.allNews.length);
      console.log('action payload in newsReducer ' + action.payload);
      state.allNews.push(action.payload);
      return { ...state, ...state.allNews };
    default:
      return state;
  }
};

export default newsReducer;

//
