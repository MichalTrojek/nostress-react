import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import NewsListItem from './NewsListItem';

const DisplayedNews = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const NewsList = ({ news, toggleEditMode, deleteNews }) => {
  return (
    <>
      <h1>Seznam</h1>
      <DisplayedNews>
        {news.map((item, index) => {
          return (
            <NewsListItem
              toggleEditMode={toggleEditMode}
              item={item}
              key={index}
              deleteNews={deleteNews}
            ></NewsListItem>
          );
        })}
      </DisplayedNews>
    </>
  );
};

export default NewsList;
