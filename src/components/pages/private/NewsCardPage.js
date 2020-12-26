import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Background from '../../common/Background';
import Wrapper from '../../common/Wrapper';

import NewsCardsEditor from '../../layouts/private/Editors/NewsCardsEditor';
import NewsList from '../../layouts/private/Editors/NewsList';

import toggleEditMode from '../../../redux/actions/editor/toggleEditMode';
import fetchCards from '../../../redux/actions/news/card/fetchCards';
import deleteCard from '../../../redux/actions/news/card/deleteCard';

const BackgroundNewsCards = styled(Background)`
  min-height: 100vh;
`;

const NewsCardPage = ({ cards, toggleEditMode, fetchCards, deleteCard }) => {
  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  return (
    <BackgroundNewsCards>
      <Wrapper>
        <NewsCardsEditor toggleEditMode={toggleEditMode} />
        <NewsList
          toggleEditMode={toggleEditMode}
          news={cards}
          deleteNews={deleteCard}
        />
      </Wrapper>
    </BackgroundNewsCards>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { cards } = state;
  return { cards };
};

export default connect(mapStateToProps, {
  toggleEditMode,
  fetchCards,
  deleteCard,
})(NewsCardPage);
