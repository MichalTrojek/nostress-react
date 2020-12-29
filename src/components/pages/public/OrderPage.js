import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import Wrapper from '../../common/Wrapper';
import Button from '../../common/Button';

import OrderBreakfastMenu from '../../layouts/public/Orders/OrderBreakfastMenu';

import OrderContainer from '../../layouts/public/Orders/styles/OrderContainer';
import OrderMainMenu from '../../layouts/public/Orders/OrderMainMenu';
import Summary from '../../layouts/public/Orders/Summary';
import Cart from '../../layouts/public/Orders/Cart';

import logo from '../../../img/logo.png';

import { showInfoToast } from '../../../notifications/toast';

const OrderPageBackground = styled.section`
  background-color: black;
  min-height: 100vh;
`;

const GoBackNavBar = styled.nav`
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

const OrderPage = ({ items, orderingStarted, resetOrders }) => {
  const [isOrderingAllowed, setIsOrderingAllowed] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showShorterText, setShowShorterText] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!orderingStarted.status) {
      history.push('/');
    } else {
      setIsOrderingAllowed(items.length > 0);
    }
  }, [items, orderingStarted.status, history]);

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
    <OrderPageBackground>
      <Wrapper>
        <GoBackNavBar>
          <img className="GoBackNavBar__logo" src={logo} alt="no stress logo" />
          <GoBackNavBarItem onClick={() => history.push('/')}>
            {showShorterText ? 'ZPĚT' : 'VRÁTIT SE NA HLAVNÍ STRÁNKU'}
          </GoBackNavBarItem>
        </GoBackNavBar>
        {showSummary ? renderSummary() : renderMenuPicker()}
      </Wrapper>
    </OrderPageBackground>
  );

  function renderSummary() {
    return <Summary hideSummary={hideSummary} />;
    function hideSummary() {
      setShowSummary(false);
    }
  }

  function renderMenuPicker() {
    return (
      <OrderContainer>
        <h1>{renderHeader()}</h1>
        <Cart />
        <Button className="orderButton" primary onClick={handleOrder}>
          Pokračovat k objednávce
        </Button>
        {renderMenu()}
      </OrderContainer>
    );
  }

  function renderHeader() {
    return orderingStarted.menuType === 'MainMenu'
      ? 'Týdenní menu 11:00 – 16:00'
      : 'Snídaňové menu 8:00 – 10:30';
  }

  function renderMenu() {
    return orderingStarted.menuType === 'MainMenu' ? (
      <OrderMainMenu />
    ) : (
      <OrderBreakfastMenu />
    );
  }

  function handleOrder() {
    if (isOrderingAllowed) {
      setShowSummary(true);
    } else {
      showInfoToast('Objednávka je prázdná');
    }
  }
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.order.items,
    orderingStarted: state.order.orderingStarted,
  };
}

export default connect(mapStateToProps, {})(OrderPage);
