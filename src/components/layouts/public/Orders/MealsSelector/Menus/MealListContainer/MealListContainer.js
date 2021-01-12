import styled from 'styled-components';

const MealListContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(34rem, 1fr));
  grid-auto-rows: 1fr;
`;

export default MealListContainer;
