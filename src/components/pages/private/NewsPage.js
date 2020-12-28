import NewsEditor from '../../layouts/private/Editors/NewsEditor';
import NewsList from '../../layouts/private/Editors/NewsList';
import styled from 'styled-components';

import Wrapper from '../../common/Wrapper';

import PrivateNavBar from '../../layouts/private/PrivateNavBar';

import deleteNews from '../../../redux/actions/news/deleteNews';
import fetchNews from '../../../redux/actions/news/fetchNews';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const NewsPageBackground = styled.div`
  background-color: black;
  min-height: 100vh;
`;

const NewsPage = ({ news, fetchNews, deleteNews }) => {
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <NewsPageBackground>
      <Wrapper>
        <PrivateNavBar />
        <NewsEditor />
        <NewsList news={news} deleteNews={deleteNews} />
      </Wrapper>
    </NewsPageBackground>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { news } = state;
  return { news };
};

export default connect(mapStateToProps, {
  fetchNews,
  deleteNews,
})(NewsPage);
