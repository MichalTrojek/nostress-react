import styled from 'styled-components';

const MealsMenuContainer = styled.section`
  display: grid;
  row-gap: 2rem;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1% 1rem;

  .menu__header {
    @media only screen and (min-width: 1024px) {
      padding: 1% 0;
    }
  }
  .menu__text {
    line-height: 2.5rem;

    @media only screen and (min-width: 768px) {
      line-height: 3rem;
    }
    @media only screen and (min-width: 1024px) {
      line-height: 3.5rem;
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 2rem;
    height: auto;

    @media only screen and (min-width: 768px) {
      width: auto;
    }
  }
`;

export default MealsMenuContainer;
