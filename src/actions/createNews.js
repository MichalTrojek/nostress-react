import { CREATE_NEWS } from './types';

const createNews = (newsContent) => {
  return (dispatch, getState) => {
    console.log('test', getState);
    dispatch({ type: CREATE_NEWS, payload: newsContent });
  };
};

export default createNews;
