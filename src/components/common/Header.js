import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

const HeaderWrapper = styled.header`
  max-width: 120rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: black;
  @media only screen and (min-width: 884px) {
    justify-content: space-between;
  }
`;

const menuItems = [
  { name: 'Domů', href: '/' },
  { name: 'Týdenní menu', href: '/' },
  { name: 'Objednat jídlo', href: '/' },
  { name: 'Novinky', href: '/' },
  { name: 'Kontakt', href: '/' },
];

const NavigationMenu = styled.ul`
  display: none;
  grid-template-columns: repeat(5, max-content);
  column-gap: 1rem;
  list-style-type: none;

  @media only screen and (min-width: 884px) {
    display: grid;
  }
`;

const NavigationMenuItem = styled.li`
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: var(--color-tertiary);
  }
`;

const NavigationMenuItemLink = styled(Link)`
  text-decoration: none;
  color: var(--color-primary);
`;

const NavigationLogo = styled.img`
  height: 5rem;
  max-width: 100%;
  transition: height 1s;
  @media only screen and (min-width: 360px) {
    height: 6rem;
  }
`;

const renderMenu = () => {
  return <NavigationMenu>{renderMenuItems()}</NavigationMenu>;
};

const renderMenuItems = () => {
  return menuItems.map((item) => {
    return (
      <NavigationMenuItem>
        <NavigationMenuItemLink to={item.href}>
          {item.name.toLocaleUpperCase()}
        </NavigationMenuItemLink>
      </NavigationMenuItem>
    );
  });
};

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <NavigationLogo src={logo} alt="No Stress Logo" />
        {renderMenu()}
      </HeaderWrapper>
    </div>
  );
};

export default Header;
