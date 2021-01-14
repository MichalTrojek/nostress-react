import React from 'react';
import styled from 'styled-components';
import NewsListItem from './NewsListItem';

const DisplayedNews = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
  }
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
