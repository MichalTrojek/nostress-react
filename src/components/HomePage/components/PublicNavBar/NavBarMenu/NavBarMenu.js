import styled from 'styled-components';
import { Link } from 'react-scroll';

import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import startOrdering from '../../../../../redux/actions/order/startOrdering';

const NavBarMenuList = styled.ul`
  display: none;
  grid-template-columns: repeat(7, max-content);
  column-gap: 1rem;
  list-style-type: none;

  @media only screen and (min-width: 1297px) {
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

const NavBarMenuItemScroll = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: var(--color-primary);
  &:hover {
    color: black;
  }
`;

const NavBarMenuItemPush = styled.div`
  font-weight: bold;
  text-decoration: none;
  color: var(--color-primary);
  &:hover {
    color: black;
  }
`;

const NavBarMenu = ({ menuItems, startOrdering }) => {
  const history = useHistory();
  return (
    <nav>
      <NavBarMenuList>
        {menuItems.map((item, index) => {
          if (item.href === '/order') {
            return (
              <NavBarMenuItemPush
                key={index}
                onClick={() => handleStartingOrder()}
              >
                <NavBarMenuItem>{item.name.toLocaleUpperCase()}</NavBarMenuItem>
              </NavBarMenuItemPush>
            );
          } else {
            return (
              <NavBarMenuItemScroll
                key={index}
                to={item.href.replace('/', '')}
                spy={true}
                smooth={true}
                offset={-80}
              >
                <NavBarMenuItem>{item.name.toLocaleUpperCase()}</NavBarMenuItem>
              </NavBarMenuItemScroll>
            );
          }
        })}
      </NavBarMenuList>
    </nav>
  );

  function handleStartingOrder() {
    window.scrollTo(0, 0);
    history.push('/order');
    startOrdering({ status: true, menuType: 'MainMenu' });
  }
};

export default connect(null, { startOrdering })(NavBarMenu);
