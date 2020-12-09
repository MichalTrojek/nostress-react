import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import mealsReducer from './mealsReducer';
import selectedNewsReducer from './selectedNewsReducer';
import editorReducer from './editorReducer';
const allReducers = combineReducers({
  editor: editorReducer,
  news: newsReducer,
  selectedNewsToEdit: selectedNewsReducer,
  meals: mealsReducer,
});

export default allReducers;
