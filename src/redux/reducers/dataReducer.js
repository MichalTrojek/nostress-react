import {
  UPDATE_HOURS,
  UPDATE_SOUPS,
  FETCH_DATA,
  UPDATE_NEWS,
  UPDATE_CARDS,
  UPDATE_MEALS,
  UPDATE_MEAL_BOX_PRICES,
  UPDATE_SOUP_BOX_PRICES,
} from '../actions/types';

const initialState = {
  allNews: [],
  meals: [],
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
  boxPrices: {
    soupBoxPrice: '',
    mealBoxPrice: '',
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
    case UPDATE_CARDS:
      return { ...state, cards: action.payload };
    case UPDATE_MEALS:
      return { ...state, meals: action.payload };
    case UPDATE_MEAL_BOX_PRICES:
      return { ...state, boxPrices: action.payload };
    case UPDATE_SOUP_BOX_PRICES:
      return { ...state, boxPrices: action.payload };
    case FETCH_DATA:
      return action.payload || state;
    default:
      return state;
  }
}

export default dataReducer;
