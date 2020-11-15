import styled from 'styled-components';
import backgroundImage from '../../../img/hero.png';

const HeroBackground = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url(${backgroundImage});
  background-repeat: no-repeat;
  //background-size: cover;
  background-position: top;
  height: 100vh;
`;

const HeroWrapper = styled.div`
  max-width: var(--max-width);
  min-height: 8rem;
  margin: 0 auto;
  padding: 1rem;
  padding-right: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeroStyled = styled.section`
  max-width: var(--max-width);
  height: max-content;

  h1 {
    font-size: 2rem;
  }
`;

const Hero = () => {
  return (
    <HeroBackground>
      <HeroWrapper>
        <HeroStyled id="home">
          <h1>Nově nabízíme dětské menu</h1>
          <p>
            Ke klasickému týdennímu menu nyní zařazujeme pokrmy i pro děti,
            které se budou také každý týden obměňovat. Dětské menu je k
            dispozici na objednávku s sebou. nebo rozvoz.{' '}
          </p>
          <h2>Káva zdarma ke každé snídani</h2>
          <p>
            Ke každé snídani patří dobrá káva. Proto ji u nás dostanete ke každé
            snídani ZDARMA.Vyzkoušejte naše vydatné snídaně, připravíme je "take
            a way" k vyzvednutí, nebo ji dovezeme až k nám.
          </p>
        </HeroStyled>
      </HeroWrapper>
    </HeroBackground>
  );
};

export default Hero;
