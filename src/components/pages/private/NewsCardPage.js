import { useState } from 'react';
import styled from 'styled-components';
import Background from '../../common/Background';
import Wrapper from '../../common/Wrapper';

import NewsCardsEditor from '../../layouts/private/NewsCardsEditor';
// import NewsList from '../../layouts/private/NewsList';

const BackgroundNewsCards = styled(Background)`
  min-height: 100vh;
`;

const NewsCardPage = () => {
  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);
  return (
    <BackgroundNewsCards>
      <Wrapper>
        {/* <NewsCardsEditor
          isEditModeEnabled={isEditModeEnabled}
          setIsEditModeEnabled={setIsEditModeEnabled}
        /> */}
        {/* <NewsList isEditModeEnabled={isEditModeEnabled} /> */}
      </Wrapper>
    </BackgroundNewsCards>
  );
};

export default NewsCardPage;
