import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import mealsReducer from './mealsReducer';
import selectedNewsReducer from './selectedNewsReducer';
import editorReducer from './editorReducer';
import soupsReducer from './soupsReducer';
import orderReducer from './orderReducer';

const allReducers = combineReducers({
  editor: editorReducer,
  news: newsReducer,
  selectedNewsToEdit: selectedNewsReducer,
  menu: mealsReducer,
  soups: soupsReducer,
  order: orderReducer,
});

export default allReducers;
