import styled from 'styled-components';
import Wrapper from '../../../common/Wrapper';

import backgroundImage375 from '../../../../img/FoodAndBeverageBackground375x250.png';
import backgroundImage768 from '../../../../img/FoodAndBeverageBackground768x512.png';
import backgroundImage1024 from '../../../../img/FoodAndBeverageBackground1024x683.png';

const FoodAndBeverageBackground = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)),
    url(${backgroundImage375});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;

  @media only screen and (min-width: 540px) {
    background-image: url(${backgroundImage768});
    height: 350px;
  }

  @media only screen and (min-width: 768px) {
    background-image: url(${backgroundImage768});
    height: 768px;
  }

  @media only screen and (min-width: 1024px) {
    background-image: url(${backgroundImage1024});
    height: 1220px;
  }

  @media only screen and (min-width: 1400px) {
    max-height: 75vh;
  }
`;

const FoodAndBeverageWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media only screen and (min-width: 768px) {
    padding-top: 8rem;
  }

  .colored {
    color: var(--color-tertiary);
  }

  .first-heading {
    padding-bottom: 1rem;
  }

  .second-heading {
    padding: 1rem 0;
  }

  @media only screen and (min-width: 768px) {
    .first-heading {
      padding: 5rem;
    }

    .second-heading {
      padding: 4rem 0;
    }

    p {
      font-size: 3rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    .first-heading {
      padding: 12rem;
    }

    .second-heading {
      padding: 6rem 0;
    }

    p {
      font-size: 4rem;
    }
  }

  @media only screen and (min-width: 1400px) {
    padding-top: 0rem;
    .colored {
      color: var(--color-tertiary);
      padding-bottom: 1rem;
    }

    .first-heading {
      padding-bottom: 2rem;
    }

    .second-heading {
      padding: 3rem 0;
    }
  }
`;

const FoodAndBeverage = () => {
  return (
    <FoodAndBeverageBackground>
      <FoodAndBeverageWrapper id="food">
        <h1 className="first-heading">Jídelní a nápojový lístek</h1>
        <p>Připravujeme pro Vás nový jídelní a pápojový lístek</p>
        <h1 className="second-heading">Co u nás vždy máme? </h1>
        <p className="colored">Výbornou kávu</p>
        <p className="colored">Poličské pivo</p>
        <p className="colored">Kofolu</p>
        <p className="colored">Luxusni snídaně</p>
        <p className="colored">Rozličné týdenní menu</p>
      </FoodAndBeverageWrapper>
    </FoodAndBeverageBackground>
  );
};

export default FoodAndBeverage;
