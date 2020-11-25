import { CREATE_NEWS, FETCH_NEWS } from './types';

export const fetchNews = () => {
  return {
    type: FETCH_NEWS,
    payload: {},
  };
};

export const createNews = (newsContent) => {
  return {
    type: CREATE_NEWS,
    payload: newsContent,
  };
};
