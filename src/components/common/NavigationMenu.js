import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  text-decoration: none;
  color: var(--color-primary);
`;

const NavigationMenu = ({ menuItems }) => {
  return (
    <NavigationMenuList>
      {menuItems.map((item) => {
        return (
          <NavigationMenuItem>
            <NavigationMenuItemLink to={item.href}>
              {item.name.toLocaleUpperCase()}
            </NavigationMenuItemLink>
          </NavigationMenuItem>
        );
      })}
    </NavigationMenuList>
  );
};

export default NavigationMenu;
