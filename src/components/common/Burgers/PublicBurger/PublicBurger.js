import styled from 'styled-components';

import Burger from '../Burger';

const PublicBurgerStyled = styled(Burger)`
  @media only screen and (min-width: 1168px) {
    display: none;
  }
`;

const PublicBurger = ({ open, setOpen }) => {
  return (
    <PublicBurgerStyled open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </PublicBurgerStyled>
  );
};

export default PublicBurger;
