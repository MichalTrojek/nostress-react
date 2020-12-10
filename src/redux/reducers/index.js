import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import mealsReducer from './mealsReducer';
import selectedNewsReducer from './selectedNewsReducer';
import editorReducer from './editorReducer';
import soupsReducer from './soupsReducer';
const allReducers = combineReducers({
  editor: editorReducer,
  news: newsReducer,
  selectedNewsToEdit: selectedNewsReducer,
  meals: mealsReducer,
  soups: soupsReducer,
});

export default allReducers;
