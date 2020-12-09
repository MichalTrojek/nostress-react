import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import mealsReducer from './mealsReducer';
import selectedNewsReducer from './selectedNewsReducer';

const allReducers = combineReducers({
  news: newsReducer,
  selectedNewsToEdit: selectedNewsReducer,
  meals: mealsReducer,
});

export default allReducers;
