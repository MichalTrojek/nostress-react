import { DELETE_NEWS } from '../types';
import deleteNewsApiCalls from '../../api/news/deleteNewsApiCall';

const deleteNews = (id) => {
  deleteNewsApiCalls(id);
  return {
    type: DELETE_NEWS,
    payload: id,
  };
};

export default deleteNews;
