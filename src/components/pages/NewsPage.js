import NewsEditor from '../common/NewsEditor';
import NewsList from '../common/NewsList';
import styled from 'styled-components';

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
  return (
    <NewsPageBackground>
      <NewsPageWrapper>
        <NewsEditor />
        <NewsList />
      </NewsPageWrapper>
    </NewsPageBackground>
  );
};

export default NewsPage;
