import { CREATE_NEWS, DELETE_NEWS, EDIT_NEWS } from '../actions/types';

const newsReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_NEWS:
      return action.payload;
    case DELETE_NEWS:
      const stateAfterDelete = state.filter(
        (item) => item.id !== action.payload
      );
      return stateAfterDelete;
    case EDIT_NEWS:
      const newState = state.filter((item) => item.id !== action.payload.id);
      return [...newState, action.payload];
    default:
      return state;
  }
};

export default newsReducer;
