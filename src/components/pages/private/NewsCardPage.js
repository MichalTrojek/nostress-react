import { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Background from '../../common/Background';
import Wrapper from '../../common/Wrapper';

import NewsCardsEditor from '../../layouts/private/Editors/NewsCardsEditor';
import NewsList from '../../layouts/private/Editors/NewsList';

import fetchCards from '../../../redux/actions/news/card/fetchCards';
import deleteCard from '../../../redux/actions/news/card/deleteCard';

import PrivateNavBar from '../../layouts/private/PrivateNavBar';

const BackgroundNewsCards = styled(Background)`
  min-height: 100vh;
`;

const NewsCardPage = ({ cards, fetchCards, deleteCard }) => {
  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  return (
    <BackgroundNewsCards>
      <Wrapper>
        <PrivateNavBar />
        <NewsCardsEditor />
        <NewsList news={cards} deleteNews={deleteCard} />
      </Wrapper>
    </BackgroundNewsCards>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { cards } = state;
  return { cards };
};

export default connect(mapStateToProps, {
  fetchCards,
  deleteCard,
})(NewsCardPage);
