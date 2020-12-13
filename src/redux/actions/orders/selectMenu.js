import { SELECT_MENU } from '../types';

function selectMenu(menuType) {
  return {
    type: SELECT_MENU,
    payload: menuType,
  };
}

export default selectMenu;
