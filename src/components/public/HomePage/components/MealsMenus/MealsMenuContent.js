import styled from 'styled-components';

const MealsMenuContent = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1400px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  .leftside {
    grid-column: 1 / span 7;
    display: grid;
  }

  .rightside {
    grid-column: 8 /-1;
    display: grid;
  }

  .rightside-breakfast {
    grid-column: 8 /-1;
    display: grid;
    grid-template-rows: 1fr;
  }
`;

export default MealsMenuContent;
