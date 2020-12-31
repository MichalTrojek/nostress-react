import {
  UPDATE_HOURS,
  UPDATE_SOUPS,
  FETCH_DATA,
  UPDATE_NEWS,
} from '../actions/types';

const initialState = {
  allNews: [],
  menu: [],
  cards: [],
  soups: {
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    price: '',
  },
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
      return { ...state, soups: action.payload };
    case UPDATE_NEWS:
      return { ...state, allNews: action.payload };
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default dataReducer;
