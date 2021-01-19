import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarMenuList = styled.ul`
  display: none;
  grid-template-columns: repeat(7, max-content);
  column-gap: 1rem;
  list-style-type: none;

  @media only screen and (min-width: 1262px) {
    display: grid;
  }
`;

const NavBarMenuItem = styled.li`
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 2.1rem;
  cursor: pointer;
  &:hover {
    background-color: var(--color-tertiary);
  }
`;

const NavBarMenuItemList = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: var(--color-primary);
  &:hover {
    color: black;
  }
`;

const PrivateNavBarMenu = ({ menuItems, handleLogOut }) => {
  return (
    <nav>
      <NavBarMenuList>
        {menuItems.map((item, index) => {
          if (item.href.includes('logout')) {
            return (
              <NavBarMenuItemList key={index} to="" onClick={handleLogOut}>
                <NavBarMenuItem>{item.name.toLocaleUpperCase()}</NavBarMenuItem>
              </NavBarMenuItemList>
            );
          } else {
            return (
              <NavBarMenuItemList
                key={index}
                to={item.href}
                spy="true"
                smooth="true"
                offset={-80}
              >
                <NavBarMenuItem>{item.name.toLocaleUpperCase()}</NavBarMenuItem>
              </NavBarMenuItemList>
            );
          }
        })}
      </NavBarMenuList>
    </nav>
  );
};

export default PrivateNavBarMenu;
