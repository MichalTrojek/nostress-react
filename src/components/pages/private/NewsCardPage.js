import styled from 'styled-components';
import Background from '../../common/Background';
import Wrapper from '../../common/Wrapper';

import NewsCardsEditor from '../../layouts/private/NewsCardsEditor';

const BackgroundNewsCards = styled(Background)`
  min-height: 100vh;
`;

const NewsCardPage = () => {
  return (
    <BackgroundNewsCards>
      <Wrapper>
        <NewsCardsEditor />
      </Wrapper>
    </BackgroundNewsCards>
  );
};

export default NewsCardPage;
