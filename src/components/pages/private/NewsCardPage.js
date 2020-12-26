import { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Background from '../../common/Background';
import Wrapper from '../../common/Wrapper';

import NewsCardsEditor from '../../layouts/private/NewsCardsEditor';
// import NewsList from '../../layouts/private/NewsList';

import toggleEditMode from '../../../redux/actions/editor/toggleEditMode';

const BackgroundNewsCards = styled(Background)`
  min-height: 100vh;
`;

const NewsCardPage = ({ carts, toggleEditMode }) => {
  return (
    <BackgroundNewsCards>
      <Wrapper>
        <NewsCardsEditor toggleEditMode={toggleEditMode} />
        {/* <NewsList isEditModeEnabled={isEditModeEnabled} /> */}
      </Wrapper>
    </BackgroundNewsCards>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { carts } = state;
  return { carts };
};

export default connect(mapStateToProps, { toggleEditMode })(NewsCardPage);
