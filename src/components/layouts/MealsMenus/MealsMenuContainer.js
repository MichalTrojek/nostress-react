import styled from 'styled-components';

const MealsMenuContainer = styled.section`
  display: grid;
  row-gap: 2rem;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 3rem 1rem 3rem 1rem;

  img {
    width: 2rem;
    height: auto;

    @media only screen and (min-width: 768px) {
      width: auto;
    }
  }
`;

export default MealsMenuContainer;
