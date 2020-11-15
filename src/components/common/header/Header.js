import styled from 'styled-components';

const HeaderStyled = styled.header`
  background-color: red;
  height: 100vh;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <h1>Header</h1>
    </HeaderStyled>
  );
};

export default Header;
