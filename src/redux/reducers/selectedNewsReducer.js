import { SELECTED_NEWS, EMPTY_SELECTED_NEWS } from '../actions/types';

const SelectedNewsReducer = (state = [], action) => {
  switch (action.type) {
    case SELECTED_NEWS:
      return (state = action.payload);
    case EMPTY_SELECTED_NEWS:
      return [];
    default:
      return state;
  }
};

export default SelectedNewsReducer;