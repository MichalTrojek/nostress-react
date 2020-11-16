import styled from 'styled-components';
import backgroundImage from '../../../img/hero.png';
import SlideView from '../slideview/SlideView';

const HeroBackground = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url(${backgroundImage});
  background-repeat: no-repeat;
  //background-size: cover;
  background-position: top;
  height: 100vh;
`;

const HeroWrapper = styled.section`
  max-width: var(--max-width);
  min-height: 8rem;
  margin: 0 auto;
`;

const Hero = () => {
  return (
    <HeroBackground>
      <HeroWrapper>
        <SlideView />
      </HeroWrapper>
    </HeroBackground>
  );
};

export default Hero;
