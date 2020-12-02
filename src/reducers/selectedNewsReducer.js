import { SELECTED_NEWS } from '../actions/types';

const SelectedNewsReducer = (state = [], action) => {
  switch (action.type) {
    case SELECTED_NEWS:
      return (state = action.payload);
    default:
      return state;
  }
};

export default SelectedNewsReducer;
