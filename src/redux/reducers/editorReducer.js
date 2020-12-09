import { TOGGLE_EDIT_MODE, SELECT_ITEM_TO_EDIT } from '../actions/types';

const initialState = { selectedItem: null, isEditModeOn: false };

const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_EDIT_MODE:
      return { ...state, isEditModeOn: action.payload };
    case SELECT_ITEM_TO_EDIT:
      return { ...state, selectedItem: action.payload };
    default:
      return state;
  }
};

export default editorReducer;
