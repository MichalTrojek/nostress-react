import styled from 'styled-components';

const HeroBackground = styled.div`
  height: 100vh;

  //background-image: url('../../../img/header.pgn');
`;
const HeroStyled = styled.section`
  max-width: var(--max-width);
  height: 100vh;
  // background-color: green;
`;

const Hero = () => {
  return (
    <HeroBackground>
      <HeroStyled id="home">
        <h1>Hero</h1>
      </HeroStyled>
    </HeroBackground>
  );
};

export default Hero;
