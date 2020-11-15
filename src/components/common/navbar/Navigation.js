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

const NavigationBackground = styled.header`
  background-color: black;
  width: 100vw;
  height: 8rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const NavigationWrapper = styled.div`
  max-width: 120rem;
  min-height: 8rem;
  margin: 0 auto;
  padding: 1rem;
  padding-right: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    <>
      <NavigationBackground>
        <NavigationWrapper className="navigation">
          <NavigationLogo src={logo} alt="No Stress Logo" />
          <NavigationMenuList menuItems={MENU_ITEMS} />
          <Burger open={open} setOpen={setOpen} />
        </NavigationWrapper>
      </NavigationBackground>

      <SideMenuStyled open={open} menuItems={MENU_ITEMS} />
    </>
  );
};

export default Navigation;
