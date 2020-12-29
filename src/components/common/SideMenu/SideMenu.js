import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const SideMenuStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-secondary);
  height: 100vh;
  width: 100vw;
  text-align: left;
  padding: 2rem 1rem 2rem 2rem;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  position: fixed;
  top: 80px;
  overflow-x: hidden;
  z-index: 5;
`;

const SideMenuItem = styled.li`
  padding: 2rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  list-style-type: none;
  border-radius: 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: var(--color-tertiary);
  }
`;

const SideMenuLink = styled(Link)`
  font-size: 2rem;
  color: var(--color-primary);
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: black;
  }
  display: flex;
  flex-direction: column;
`;

const SideMenuLinkScroll = styled(ScrollLink)`
  font-size: 2rem;
  color: var(--color-primary);
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: black;
  }
  display: flex;
  flex-direction: column;
`;

const SideMenu = ({ menuItems, open, setOpen, handleLogOut }) => {
  const [isDashboard, setIsDashBoard] = useState(true);

  useEffect(() => {
    if (menuItems[0].href.includes('dashboard')) {
      setIsDashBoard(true);
    } else {
      setIsDashBoard(false);
    }
  }, [menuItems]);

  return (
    <SideMenuStyled open={open}>
      <ul>
        {menuItems.map((item, index) => {
          const path = isDashboard ? item.href : item.href.replace('/', '');

          if (item.href.includes('logout')) {
            return (
              <SideMenuLink
                key={index}
                to=""
                onClick={() => {
                  setOpen(!open);
                  handleLogOut();
                }}
              >
                <SideMenuItem>{item.name}</SideMenuItem>
              </SideMenuLink>
            );
          } else {
            return renderMenuItems(item, index, path);
          }
        })}
      </ul>
    </SideMenuStyled>
  );

  function renderMenuItems(item, index, path) {
    if (isDashboard) {
      return (
        <SideMenuLink
          key={index}
          to={path}
          spy="true"
          smooth="true"
          offset={-80}
          onClick={() => setOpen(!open)}
        >
          <SideMenuItem>{item.name}</SideMenuItem>
        </SideMenuLink>
      );
    } else {
      return (
        <SideMenuLinkScroll
          key={index}
          to={path}
          spy={true}
          smooth="true"
          offset={-80}
          onClick={() => setOpen(!open)}
        >
          <SideMenuItem>{item.name}</SideMenuItem>
        </SideMenuLinkScroll>
      );
    }
  }
};
export default SideMenu;
