import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import newsReducer from './newsReducer';
import mealsReducer from './mealsReducer';
import selectedNewsReducer from './selectedNewsReducer';

const allReducers = combineReducers({
  data: dataReducer,
  news: newsReducer,
  selectedNewsToEdit: selectedNewsReducer,
  meals: mealsReducer,
});

export default allReducers;
