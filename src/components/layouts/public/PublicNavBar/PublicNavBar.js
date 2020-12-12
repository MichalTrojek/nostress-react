import React, { useState } from 'react';
import styled from 'styled-components';

import logo from '../../../../img/logo.png';

import Burger from '../../../common/Burger';
import SideMenuStyled from '../../../common/SideMenu';
import NavBarMenu from './NavBarMenu';

const MENU_ITEMS = [
  { name: 'Domů', href: '/home' },
  { name: 'Menu', href: '/menu' },
  { name: 'Objednat jídlo', href: '/order' },
  { name: 'Novinky', href: '/news' },
  { name: 'Jídelní lístek', href: '/food' },
  { name: 'Otevírací doba', href: '/open' },
  { name: 'Kontakt', href: '/contact' },
];

const NavBarBackground = styled.header`
  background: rgba(0, 0, 0, 0.9);
  width: 100vw;
  min-height: 8rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999999999999;
`;

const NavBarWrapper = styled.div`
  max-width: var(--max-width);
  min-height: 8rem;
  margin: 0 auto;
  padding: 1rem;
  padding-right: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBarLogo = styled.img`
  height: 5rem;
  max-width: 100%;
  transition: height 1s;
  @media only screen and (min-width: 360px) {
    height: 6rem;
  }
`;

const PublicNavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavBarBackground>
        <NavBarWrapper className="navigation">
          <NavBarLogo src={logo} alt="No Stress Logo" />
          <NavBarMenu menuItems={MENU_ITEMS} />
          <Burger open={open} setOpen={setOpen} />
        </NavBarWrapper>
      </NavBarBackground>
      <SideMenuStyled open={open} setOpen={setOpen} menuItems={MENU_ITEMS} />
    </>
  );
};

export default PublicNavBar;
