import styled from 'styled-components';
import { Link } from 'react-scroll';

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
  top: 70px;
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
`;

const SideMenu = ({ menuItems, open, setOpen }) => {
  return (
    <SideMenuStyled open={open}>
      <ul>
        {menuItems.map((item, index) => {
          return (
            <SideMenuLink
              key={index}
              to={item.href.replace('/', '')}
              spy={true}
              smooth={true}
              offset={-80}
              onClick={() => setOpen(!open)}
            >
              <SideMenuItem>{item.name}</SideMenuItem>
            </SideMenuLink>
          );
        })}
      </ul>
    </SideMenuStyled>
  );
};
export default SideMenu;
