import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideMenuStyled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: var(--color-secondary);
  height: 100vh;
  text-align: left;
  padding: 2rem;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  position: fixed;
  overflow-x: hidden;
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

  &:hover .sidemenuLink {
    color: black;
  }
`;

const SideMenuLink = styled(Link)`
  font-size: 2rem;
  color: var(--color-primary);
  text-transform: uppercase;

  text-decoration: none;
`;

const SideMenu = ({ menuItems, open }) => {
  console.log(menuItems);
  return (
    <SideMenuStyled open={open}>
      <ul>
        {menuItems.map((item, index) => {
          return (
            <SideMenuItem key={index}>
              <SideMenuLink className="sidemenuLink" to={item.href}>
                {' '}
                {item.name}
              </SideMenuLink>
            </SideMenuItem>
          );
        })}
      </ul>
    </SideMenuStyled>
  );
};
export default SideMenu;
