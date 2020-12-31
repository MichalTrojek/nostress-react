import React from 'react';
import styled from 'styled-components';
import NewsListItem from './NewsListItem';

const DisplayedNews = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const NewsList = ({ items = [], deleteNews }) => {
  return (
    <>
      <h1>Seznam</h1>
      <DisplayedNews>
        {items.map((item, index) => {
          return (
            <NewsListItem
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
