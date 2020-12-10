import { EDIT_SOUPS, FETCH_SOUPS } from '../actions/types';

function soupsReducer(state, action) {
  switch (action.type) {
    case EDIT_SOUPS:
      return state;
    case FETCH_SOUPS:
      return state;
    default:
      return state;
  }
}

export default soupsReducer;
