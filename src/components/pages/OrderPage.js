import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import Wrapper from '../common/Wrapper';
import Button from '../common/Button';

import Summary from '../layouts/public/Orders/Summary';

import OrderMainMenu from '../layouts/public/Orders/OrderMainMenu';
import OrderBreakfastMenu from '../layouts/public/Orders/OrderBreakfastMenu';
import Cart from '../layouts/public/Orders/Cart';
import OrderContainer from '../layouts/public/Orders/styles/OrderContainer';

import { showInfoToast } from '../../notifications/toast';

const OrderPageBackground = styled.section`
  background-color: black;
  min-height: 100vh;
`;

const OrderPage = ({ items, orderingStarted }) => {
  const [isOrderingAllowed, setIsOrderingAllowed] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!orderingStarted.status) {
      history.push('/');
    } else {
      setIsOrderingAllowed(items.length > 0);
    }
  }, [items, orderingStarted.status]);

  return (
    <OrderPageBackground>
      <Wrapper>{showSummary ? renderSummary() : renderMenuPicker()}</Wrapper>
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
    return orderingStarted.orderType === 'MainMenu'
      ? 'Týdenní menu 11:00 – 16:00'
      : 'Snídaňové menu 8:00 – 10:30';
  }

  function renderMenu() {
    return orderingStarted.orderType === 'MainMenu' ? (
      <OrderMainMenu />
    ) : (
      <OrderBreakfastMenu />
    );
  }

  function handleOrder() {
    if (isOrderingAllowed) {
      setShowSummary(true);
      localStorage.setItem('items', JSON.stringify(items));
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
