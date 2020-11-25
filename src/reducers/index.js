import { combineReducers } from 'redux';
import newsReducer from './newsReducer';

const allReducers = combineReducers({
  allNews: newsReducer,
});

export default allReducers;
