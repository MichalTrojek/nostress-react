import styled from 'styled-components';

const MenuWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;
const MenuStyled = styled.section`
  background-color: blue;
  height: 100vh;

  //padding: 8rem;
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuStyled id="menu">
        <h1>Menu</h1>
      </MenuStyled>
    </MenuWrapper>
  );
};

export default Menu;
