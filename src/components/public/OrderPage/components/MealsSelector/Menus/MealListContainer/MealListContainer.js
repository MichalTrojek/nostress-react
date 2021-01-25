import styled from 'styled-components';

const MealListContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  grid-auto-rows: 1fr;

  @media only screen and (min-width: 375px) {
    grid-template-columns: repeat(auto-fill, minmax(34rem, 1fr));
  }
`;

export default MealListContainer;
