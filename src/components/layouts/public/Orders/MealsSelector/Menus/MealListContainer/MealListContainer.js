import styled from 'styled-components';

const MealListContainer = styled.div`
  /* @media only screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  } */

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, 1fr);
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, 49%);
  }

  @media only screen and (min-width: 1262px) {
    grid-template-columns: repeat(auto-fill, 32.8%);
  }
`;

export default MealListContainer;
