import { SELECTED_NEWS } from '../types';

const setSelectedNewsToEdit = (selectedNews) => {
  return {
    type: SELECTED_NEWS,
    payload: selectedNews,
  };
};

export default setSelectedNewsToEdit;
