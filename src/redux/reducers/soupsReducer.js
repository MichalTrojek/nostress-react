import { EDIT_SOUPS, FETCH_SOUPS } from '../actions/types';

const initialState = {
  monday: '',
  tuesday: '',
  wednesday: '',
  thursday: '',
  friday: '',
  price: '',
};

function soupsReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_SOUPS:
      return { ...action.payload };
    case FETCH_SOUPS:
      return { ...action.payload };
    default:
      return state;
  }
}

export default soupsReducer;
