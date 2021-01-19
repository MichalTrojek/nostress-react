import { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Background from '../../common/Background';
import Wrapper from '../../common/Wrapper';

import NewsCardsEditor from '../../layouts/private/Editors/NewsCardsEditor';
import NewsList from '../../layouts/private/Editors/NewsList';

import fetchData from '../../../redux/actions/data/fetchData';
import deleteCard from '../../../redux/actions/data/cards/deleteCard';

import PrivateNavBar from '../../layouts/private/PrivateNavBar';

const BackgroundNewsCards = styled.div`
  min-height: 100vh;
  background-color: black;
`;

const NewsCardPage = ({ cards, fetchData, deleteCard }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <BackgroundNewsCards>
      <Wrapper>
        <PrivateNavBar />
        <NewsCardsEditor />
        <NewsList items={cards} deleteNews={deleteCard} />
      </Wrapper>
    </BackgroundNewsCards>
  );
};

const mapStateToProps = (state, ownProps) => {
  const cards = state.data.cards;

  return { cards };
};

export default connect(mapStateToProps, {
  fetchData,
  deleteCard,
})(NewsCardPage);
