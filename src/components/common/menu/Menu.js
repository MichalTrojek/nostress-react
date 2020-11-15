import styled from 'styled-components';

const MenuStyled = styled.section`
  background-color: blue;
  height: 100vh;
  //padding: 8rem;
`;

const Menu = () => {
  return (
    <MenuStyled id="menu">
      <h1>Menu</h1>
    </MenuStyled>
  );
};

export default Menu;
