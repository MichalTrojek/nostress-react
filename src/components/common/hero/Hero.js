import styled from 'styled-components';
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

const data = [
  {
    header: 'Spuštíme rozvoz a výdejní okénko',
    content:
      'Myslíme stále na Vás a o nabídku našich skvělých pokrmů Vás nechceme ochudit ani v době nouzového stavu a uzavřených restaurací.Myslíme stále na Vás a o nabídku našich skvělých pokrmů Vás nechceme ochudit ani v době nouzového stavu a uzavřených restaurací.',
    button: 'OBJEDNAT',
  },
  {
    header: 'Nově nabízíme dětské menu!',
    content:
      'Ke klasickému týdennímu menu nyní zařazujeme pokrmy i pro děti, které se budou také každý týden obměňovat. Dětské menu je k dispozici na objednávku s sebou. nebo rozvoz.',
    button: 'OBJEDNAT',
  },
  {
    header: 'Už jste vyzkoušeli naše snídaně?',
    content:
      'Máte rádi snídaně? Chybí Vám zrušené snídaně v zavřených restauracích a fast foodech?',
    button: 'OBJEDNAT SNÍDANI',
  },
];
const Hero = () => {
  return (
    <HeroBackground id="home">
      <HeroWrapper>
        <SlideView items={data} />
      </HeroWrapper>
    </HeroBackground>
  );
};

export default Hero;
