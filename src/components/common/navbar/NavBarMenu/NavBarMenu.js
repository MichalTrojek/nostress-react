import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavBarMenuList = styled.ul`
  display: none;
  grid-template-columns: repeat(5, max-content);
  column-gap: 1rem;
  list-style-type: none;

  @media only screen and (min-width: 884px) {
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

const NavBarMenu = ({ menuItems }) => {
  return (
    <nav>
      <NavBarMenuList>
        {menuItems.map((item, index) => {
          return (
            <NavBarMenuItemList
              key={index}
              to={item.href.replace('/', '')}
              spy={true}
              smooth={true}
              offset={-80}
            >
              <NavBarMenuItem>{item.name.toLocaleUpperCase()}</NavBarMenuItem>
            </NavBarMenuItemList>
          );
        })}
      </NavBarMenuList>
    </nav>
  );
};

export default NavBarMenu;
