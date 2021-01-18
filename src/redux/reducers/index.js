import { combineReducers } from 'redux';
import editorReducer from './editorReducer';
import orderReducer from '../../OrderingSystem/redux/reducer/orderReducer';
import dataReducer from './dataReducer';

const allReducers = combineReducers({
  editor: editorReducer,
  order: orderReducer,
  data: dataReducer,
});

export default allReducers;
