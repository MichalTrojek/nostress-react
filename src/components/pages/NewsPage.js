import NewsEditor from '../common/NewsEditor';
import NewsList from '../common/NewsList';
import styled from 'styled-components';
import { useState } from 'react';

const NewsPageBackground = styled.div`
  background-color: black;
  min-height: 100vh;
`;
const NewsPageWrapper = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
`;

const NewsPage = () => {
  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);

  return (
    <NewsPageBackground>
      <NewsPageWrapper>
        <NewsEditor
          isEditModeEnabled={isEditModeEnabled}
          setIsEditModeEnabled={setIsEditModeEnabled}
        />
        <NewsList isEditModeEnabled={isEditModeEnabled} />
      </NewsPageWrapper>
    </NewsPageBackground>
  );
};

export default NewsPage;
