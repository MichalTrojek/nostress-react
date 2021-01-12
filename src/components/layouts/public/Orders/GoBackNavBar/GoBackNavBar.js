import styled from 'styled-components';
import { useEffect, useState } from 'react';
import logo from '../../../../../img/logo.png';

import { useHistory } from 'react-router-dom';

const GoBackNavBarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  .GoBackNavBar__logo {
    height: 5rem;
    max-width: 100%;
    transition: height 1s;
    @media only screen and (min-width: 360px) {
      height: 6rem;
    }
  }
`;

const GoBackNavBarItem = styled.div`
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

const GoBackNavBar = () => {
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
    <GoBackNavBarStyle>
      <img className="GoBackNavBar__logo" src={logo} alt="no stress logo" />
      <GoBackNavBarItem onClick={() => history.push('/')}>
        {showShorterText ? 'DOMŮ' : 'VRÁTIT SE NA HLAVNÍ STRÁNKU'}
      </GoBackNavBarItem>
    </GoBackNavBarStyle>
  );
};

export default GoBackNavBar;
