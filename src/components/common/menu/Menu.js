import styled from 'styled-components';
import Weekly from '../Meals';

const MenuBackground = styled.div`
  background-color: black;
`;
const MenuWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;
const MenuStyled = styled.section`
  height: 100vh;

  //padding: 8rem;
`;

const Menu = () => {
  return (
    <MenuBackground>
      <MenuWrapper>
        <MenuStyled id="menu">
          <Weekly></Weekly>
        </MenuStyled>
      </MenuWrapper>
    </MenuBackground>
  );
};

export default Menu;
