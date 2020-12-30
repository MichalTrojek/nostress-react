import { UPDATE_HOURS, UPDATE_SOUPS, FETCH_DATA } from '../actions/types';

const initialState = {
  news: [],
  menu: [],
  soups: [],
  cards: [],
  hours: {
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: '',
  },
};

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_HOURS:
      return { ...state, hours: action.payload };
    case UPDATE_SOUPS:
      return { ...state, hours: action.payload };
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default dataReducer;
