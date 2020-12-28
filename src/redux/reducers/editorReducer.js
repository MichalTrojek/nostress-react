import { SELECT_ITEM_TO_EDIT } from '../actions/types';

const initialState = { selectedItem: null, isEditModeOn: false };

const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ITEM_TO_EDIT:
      return {
        isEditModeOn: action.payload ? true : false,
        selectedItem: action.payload,
      };
    default:
      return state;
  }
};

export default editorReducer;
