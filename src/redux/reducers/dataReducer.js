import {
  UPDATE_HOURS,
  UPDATE_SOUPS,
  FETCH_DATA,
  UPDATE_NEWS,
  UPDATE_CARDS,
  UPDATE_MEALS,
  UPDATE_TEXTS,
  UPDATE_MEAL_BOX_PRICES,
  UPDATE_SOUP_BOX_PRICES,
} from '../actions/types';

const initialState = {
  allNews: [],
  meals: [],
  cards: [],
  soups: {
    monday: { name: '', alergens: [''] },
    tuesday: { name: '', alergens: [''] },
    wednesday: { name: '', alergens: [''] },
    thursday: { name: '', alergens: [''] },
    friday: { name: '', alergens: [''] },
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
    soupBoxPrice: '0',
    mealBoxPrice: '0',
  },
  texts: {
    mainMenu: {
      heading: '',
      mainText: '',
      dateText: '',
      menuInfoText: '',
      childMenuInfoText: '',
    },
    breakfastMenu: {
      heading: '',
      mainText: '',
      dateText: '',
      menuInfoText: '',
      deliveryTime: '',
    },
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
    case UPDATE_TEXTS:
      return { ...state, texts: action.payload };
    case FETCH_DATA:
      return action.payload || state;
    default:
      return state;
  }
}

export default dataReducer;
