import { combineReducers } from 'redux';
import mealsReducer from './mealsReducer';
import editorReducer from './editorReducer';
import orderReducer from './orderReducer';
import dataReducer from './dataReducer';

const allReducers = combineReducers({
  editor: editorReducer,
  menu: mealsReducer,
  order: orderReducer,
  data: dataReducer,
});

export default allReducers;
