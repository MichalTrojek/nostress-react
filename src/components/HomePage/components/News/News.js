import styled from 'styled-components';
import Wrapper from '../../../common/Wrapper';
import NewsSlider from './NewsSlider';

import backgroundImg from '../../../../img/news.png';

const NewsBackground = styled.section`
  background-image: url(${backgroundImg});
  background-position: center;
  background-size: cover;
`;

const NewsWrapper = styled(Wrapper)`
  h1 {
    padding-bottom: 1rem;
  }
`;

const News = () => {
  return (
    <NewsBackground>
      <NewsWrapper id="news">
        <h1>Novinky</h1>
        <NewsSlider />
      </NewsWrapper>
    </NewsBackground>
  );
};

export default News;
