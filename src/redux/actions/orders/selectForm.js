import { SELECT_FORM } from '../types';
function selectForm(selectedForm) {
  return {
    type: SELECT_FORM,
    payload: selectedForm,
  };
}

export default selectForm;