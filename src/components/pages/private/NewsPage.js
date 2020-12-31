import NewsEditor from '../../layouts/private/Editors/NewsEditor';
import NewsList from '../../layouts/private/Editors/NewsList';
import styled from 'styled-components';

import Wrapper from '../../common/Wrapper';

import PrivateNavBar from '../../layouts/private/PrivateNavBar';

import deleteNews from '../../../redux/actions/data/news/deleteNews';

import fetchData from '../../../redux/actions/data/fetchData';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const NewsPageBackground = styled.div`
  background-color: black;
  min-height: 100vh;
`;

const NewsPage = ({ allNews, fetchData, deleteNews }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <NewsPageBackground>
      <Wrapper>
        <PrivateNavBar />
        <NewsEditor />
        <NewsList allNews={allNews} deleteNews={deleteNews} />
      </Wrapper>
    </NewsPageBackground>
  );
};

const mapStateToProps = (state, ownProps) => {
  const allNews = state.data.allNews;
  return { allNews };
};

export default connect(mapStateToProps, {
  fetchData,
  deleteNews,
})(NewsPage);
