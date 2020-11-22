import { combineReducers } from 'redux';

import authReducer from './authreducer/authreducers';

export default combineReducers({
  auth: () => authReducer,
});
