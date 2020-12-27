import React, { useState } from 'react';
import styled from 'styled-components';

import { useAuth } from '../../../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { showErrorToast } from '../../../../notifications/toast';

import logo from '../../../../img/logo.png';

import PrivateBurger from '../../../common/Burgers/PrivateBurger';
import SideMenuStyled from '../../../common/SideMenu';
import PrivateNavBarMenu from './PrivateNavBarMenu';

const MENU_ITEMS = [
  { name: 'Objednávky', href: '/dashboard/orders' },
  { name: 'historie', href: '/dashboard/ordersHistory' },
  { name: 'Editor Menu', href: '/dashboard/meals' },
  { name: 'Editor Polivek', href: '/dashboard/soups' },
  { name: 'Editor Novinek', href: '/dashboard/news' },
  { name: 'Editor Karet', href: '/dashboard/cards' },
  { name: 'Odhlásit se', href: 'logout' },
];

const NavBarBackground = styled.header`
  background: rgba(0, 0, 0, 0.9);
  min-height: 8rem;
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

const PrivateNavBar = () => {
  const [open, setOpen] = useState(false);

  const { logout } = useAuth();
  const history = useHistory();
  return (
    <>
      <NavBarBackground>
        <NavBarWrapper className="navigation">
          <NavBarLogo src={logo} alt="No Stress Logo" />
          <PrivateNavBarMenu
            menuItems={MENU_ITEMS}
            handleLogOut={handleLogOut}
          />
          <PrivateBurger open={open} setOpen={setOpen} />
        </NavBarWrapper>
      </NavBarBackground>
      <SideMenuStyled
        open={open}
        setOpen={setOpen}
        menuItems={MENU_ITEMS}
        handleLogOut={handleLogOut}
      />
    </>
  );
  async function handleLogOut() {
    try {
      await logout();
      history.push('/login');
    } catch {
      showErrorToast('Odhlášení se nezdařilo');
    }
  }
};

export default PrivateNavBar;
