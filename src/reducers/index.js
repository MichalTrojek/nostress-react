import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import mealsReducer from './mealsReducer';

const allReducers = combineReducers({
  news: newsReducer,
  meals: mealsReducer,
});

export default allReducers;
