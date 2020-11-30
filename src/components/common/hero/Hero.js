import { useEffect } from 'react';
import styled from 'styled-components';

import fetchNews from '../../../actions/fetchNews';
import { connect } from 'react-redux';
import backgroundImage from '../../../img/hero.png';
import SlideView from '../slideview/SlideView';

const HeroBackground = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url(${backgroundImage});

  background-size: cover;
  background-position: center center;

  //background-attachment: fixed;
`;

const HeroWrapper = styled.section`
  max-width: var(--max-width);
  min-height: 8rem;
  margin: 0 auto;
`;

const Hero = ({ news, fetchNews }) => {
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <HeroBackground id="home">
      <HeroWrapper>
        <SlideView items={news} />
      </HeroWrapper>
    </HeroBackground>
  );
};

function mapStateToProps(state, prevState) {
  const { news } = state;
  return {
    news,
  };
}

export default connect(mapStateToProps, { fetchNews })(Hero);
