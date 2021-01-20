import styled from 'styled-components';

import Burger from '../Burger';

const PrivateBurgerStyled = styled(Burger)`
  @media only screen and (min-width: 1348px) {
    display: none;
  }
`;

const PrivateBurger = ({ open, setOpen }) => {
  return (
    <PrivateBurgerStyled open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </PrivateBurgerStyled>
  );
};

export default PrivateBurger;
