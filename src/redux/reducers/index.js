import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import mealsReducer from './mealsReducer';
import editorReducer from './editorReducer';
import soupsReducer from './soupsReducer';
import orderReducer from './orderReducer';
import cardsReducer from './cardsReducer';
import dataReducer from './dataReducer';

const allReducers = combineReducers({
  editor: editorReducer,
  news: newsReducer,
  menu: mealsReducer,
  soups: soupsReducer,
  order: orderReducer,
  cards: cardsReducer,
  data: dataReducer,
});

export default allReducers;
