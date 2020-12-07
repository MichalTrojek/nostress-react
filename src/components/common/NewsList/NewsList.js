import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import fetchNews from '../../../redux/actions/news/fetchNews';
import NewsListItem from '../../common/NewsListItem';

const DisplayedNews = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

const NewsList = ({ news, fetchNews, isEditModeEnabled }) => {
  useEffect(() => {
    if (news.length === 0) {
      fetchNews();
    }
  }, [fetchNews, news.length]);

  return (
    <>
      <h1>Seznam novinek</h1>
      <DisplayedNews>
        {news.map((item, index) => {
          return (
            <NewsListItem
              news={news}
              isEditModeEnabled={isEditModeEnabled}
              item={item}
              key={index}
            ></NewsListItem>
          );
        })}
      </DisplayedNews>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { news } = state;
  return { news };
};

export default connect(mapStateToProps, {
  fetchNews,
})(NewsList);
