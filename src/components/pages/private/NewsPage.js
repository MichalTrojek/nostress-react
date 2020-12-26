import NewsEditor from '../../layouts/private/NewsEditor';
import NewsList from '../../layouts/private/NewsList';
import styled from 'styled-components';

import PrivateNavBar from '../../layouts/private/PrivateNavBar';

import fetchNews from '../../../redux/actions/news/fetchNews';
import deleteNews from '../../../redux/actions/news/deleteNews';

import toggleEditMode from '../../../redux/actions/editor/toggleEditMode';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const NewsPageBackground = styled.div`
  background-color: black;
  min-height: 100vh;
`;
const NewsPageWrapper = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
`;

const NewsPage = ({ news, toggleEditMode, fetchNews, deleteNews }) => {
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <NewsPageBackground>
      <NewsPageWrapper>
        <PrivateNavBar />
        <NewsEditor toggleEditMode={toggleEditMode} />
        <NewsList
          toggleEditMode={toggleEditMode}
          news={news}
          deleteNews={deleteNews}
        />
      </NewsPageWrapper>
    </NewsPageBackground>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { news } = state;
  return { news };
};

export default connect(mapStateToProps, {
  fetchNews,
  toggleEditMode,
  deleteNews,
})(NewsPage);
