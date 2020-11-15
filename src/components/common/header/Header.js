import styled from 'styled-components';

const HeaderStyled = styled.header`
  background-color: red;
  height: 100vh;
  // padding: 8rem;
`;

const Header = () => {
  return (
    <HeaderStyled id="home">
      <h1>Header</h1>
    </HeaderStyled>
  );
};

export default Header;
