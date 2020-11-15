import styled from 'styled-components';
import { Link } from 'react-scroll';

const NavigationMenuList = styled.ul`
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
  font-weight: bold;
  text-decoration: none;
  color: var(--color-primary);
  &:hover {
    color: black;
  }
`;

const NavigationMenu = ({ menuItems }) => {
  return (
    <nav>
      <NavigationMenuList>
        {menuItems.map((item, index) => {
          return (
            <NavigationMenuItemLink
              to={item.href.replace('/', '')}
              spy={true}
              smooth={true}
              offset={-80}
            >
              <NavigationMenuItem key={index}>
                {item.name.toLocaleUpperCase()}
              </NavigationMenuItem>
            </NavigationMenuItemLink>
          );
        })}
      </NavigationMenuList>
    </nav>
  );
};

export default NavigationMenu;
