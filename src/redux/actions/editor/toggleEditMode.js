import { TOGGLE_EDIT_MODE } from '../types';

function toggleEditMode(isEditModeOn) {
  return {
    type: TOGGLE_EDIT_MODE,
    payload: isEditModeOn,
  };
}

export default toggleEditMode;
