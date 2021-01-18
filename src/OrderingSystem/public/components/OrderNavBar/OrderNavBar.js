import styled from 'styled-components';
import { useEffect, useState } from 'react';
import logo from '../../../../img/logo.png';

import { useHistory } from 'react-router-dom';

const OrderNavBarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  .GoBackNavBar__logo {
    height: 5rem;
    max-width: 100%;
    transition: all 1s;
    @media only screen and (min-width: 360px) {
      height: 6rem;
    }
  }
  background-color: black;
`;

const OrderNavBarItem = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 2.1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: var(--color-tertiary);
    color: black;
  }
`;

const OrderNavBar = () => {
  const [showShorterText, setShowShorterText] = useState(false);
  const history = useHistory();
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    function handleResize() {
      if (window.innerWidth <= 570) {
        setShowShorterText(true);
      } else {
        setShowShorterText(false);
      }
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <OrderNavBarStyle>
      <img className="GoBackNavBar__logo" src={logo} alt="no stress logo" />
      <OrderNavBarItem onClick={() => history.push('/')}>
        {showShorterText ? 'DOMŮ' : 'VRÁTIT SE NA HLAVNÍ STRÁNKU'}
      </OrderNavBarItem>
    </OrderNavBarStyle>
  );
};

export default OrderNavBar;
