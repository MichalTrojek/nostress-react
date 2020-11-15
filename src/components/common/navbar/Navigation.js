import React, { useState } from 'react';
import styled from 'styled-components';

import logo from '../../../img/logo.png';

import Burger from './Burger';
import SideMenuStyled from './SideMenu';
import NavigationMenuList from './NavigationMenu';

const MENU_ITEMS = [
  { name: 'Domů', href: '/' },
  { name: 'Týdenní menu', href: '/' },
  { name: 'Objednat jídlo', href: '/' },
  { name: 'Novinky', href: '/' },
  { name: 'Kontakt', href: '/' },
];

const NavigationWrapper = styled.header`
  max-width: 120rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
`;

const NavigationLogo = styled.img`
  height: 5rem;
  max-width: 100%;
  transition: height 1s;
  @media only screen and (min-width: 360px) {
    height: 6rem;
  }
`;

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <NavigationWrapper className="header">
        <NavigationLogo src={logo} alt="No Stress Logo" />
        <NavigationMenuList menuItems={MENU_ITEMS} />
        <Burger open={open} setOpen={setOpen} />
      </NavigationWrapper>
      <SideMenuStyled open={open} menuItems={MENU_ITEMS} />
    </div>
  );
};

export default Navigation;
