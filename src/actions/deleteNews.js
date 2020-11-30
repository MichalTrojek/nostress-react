import { DELETE_NEWS } from './types';
import deleteNewsApiCalls from '../api/deleteNewsApiCall';

const deleteNews = (id) => {
  deleteNewsApiCalls(id);
  return {
    type: DELETE_NEWS,
    payload: id,
  };
};

export default deleteNews;
