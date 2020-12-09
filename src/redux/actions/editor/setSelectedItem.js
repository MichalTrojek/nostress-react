import { SELECT_ITEM_TO_EDIT } from '../types';

function setSelectedItem(item) {
  return {
    type: SELECT_ITEM_TO_EDIT,
    payload: item,
  };
}

export default setSelectedItem;
