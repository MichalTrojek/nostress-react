import { EMPTY_SELECTED_NEWS } from '../types';

const emptySelectedNewsToEdit = () => {
  return {
    type: EMPTY_SELECTED_NEWS,
  };
};

export default emptySelectedNewsToEdit;
