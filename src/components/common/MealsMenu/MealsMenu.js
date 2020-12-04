import styled from 'styled-components';
import Meals from '../Meals';

const MealsMenuBackground = styled.div`
  background-color: black;
`;
const MealsMenuWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;
const MealsMenuStyled = styled.section`
  padding: 3rem 1rem;
`;

const MealsMenu = () => {
  return (
    <MealsMenuBackground>
      <MealsMenuWrapper>
        <MealsMenuStyled id="menu">
          <Meals />
        </MealsMenuStyled>
      </MealsMenuWrapper>
    </MealsMenuBackground>
  );
};

export default MealsMenu;
