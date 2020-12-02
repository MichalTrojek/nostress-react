import { EDIT_NEWS } from '../types';
import editNewsApiCall from '../../api/news/editNewsApiCall';

const editNews = (id, heading, newsContent, buttonText) => {
  return (dispatch, getState) => {
    editNewsApiCall(id, heading, newsContent, buttonText);
    dispatch({
      type: EDIT_NEWS,
      payload: {
        id: id,
        heading: heading,
        content: newsContent,
        button: buttonText,
      },
    });
  };
};

export default editNews;
