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

  &:hover .navigatiomMenuItemLink {
    color: black;
  }
`;

const NavigationMenuItemLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: var(--color-primary);
`;

const NavigationMenu = ({ menuItems }) => {
  return (
    <nav>
      <NavigationMenuList>
        {menuItems.map((item, index) => {
          return (
            <NavigationMenuItem key={index}>
              <NavigationMenuItemLink
                className="navigatiomMenuItemLink"
                to={item.href.replace('/', '')}
                spy={true}
                smooth={true}
                offset={-80}
              >
                {item.name.toLocaleUpperCase()}
              </NavigationMenuItemLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </nav>
  );
};

export default NavigationMenu;
