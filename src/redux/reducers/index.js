import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import mealsReducer from './mealsReducer';
import editorReducer from './editorReducer';
import orderReducer from './orderReducer';
import cardsReducer from './cardsReducer';
import dataReducer from './dataReducer';

const allReducers = combineReducers({
  editor: editorReducer,
  menu: mealsReducer,
  order: orderReducer,
  cards: cardsReducer,
  data: dataReducer,
});

export default allReducers;
