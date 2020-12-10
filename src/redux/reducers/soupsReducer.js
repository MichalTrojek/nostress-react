import { EDIT_SOUPS, FETCH_SOUPS } from '../actions/types';

const initialState = {
  monday: null,
  tuesday: null,
  wednesday: null,
  thursday: null,
  friday: null,
  price: null,
};

function soupsReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_SOUPS:
      return { ...action.payload };
    case FETCH_SOUPS:
      console.log('fetch soups');
      console.log(action.payload);
      return { ...action.payload };
    default:
      return state;
  }
}

export default soupsReducer;
