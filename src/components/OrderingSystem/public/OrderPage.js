import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Wrapper from '../../common/Wrapper';

import MealsSelector from './components/MealsSelector';
import Confirmation from './components/Confirmation';
import OrderNavBar from './components/OrderNavBar';
import Summary from './components/Summary';

import StickyCart from './components/StickyCart';

import { CSSTransition } from 'react-transition-group';

import './OrderPage.css';
import './components/StickyCart/StickyCart.css';

const OrderPageBackground = styled.section`
  background-color: black;
  overflow-x: hidden;
  padding-bottom: 8rem;
  min-height: 100vh;
`;

const OrderWrapper = styled(Wrapper)`
  position: relative;
`;

const OrderPage = ({ items, orderingStarted }) => {
  const [isOrderingAllowed, setIsOrderingAllowed] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showStickyCart, setShowStickyCart] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!orderingStarted.status) {
      history.push('/');
    } else {
      setIsOrderingAllowed(items.length > 0);
      setShowStickyCart(items.length > 0);
    }
  }, [items, orderingStarted.status, history]);

  useEffect(() => {
    if (!showSummary) {
      setShowStickyCart(true);
      window.scrollTo(0, 0);
    } else {
      setShowStickyCart(false);
    }
  }, [showSummary]);

  useEffect(() => {
    setShowStickyCart(false);
  }, [showConfirmation]);

  return (
    <OrderPageBackground>
      <CSSTransition
        in={true}
        classNames="orderPage-"
        timeout={1000}
        appear={true}
      >
        <OrderWrapper>
          <OrderNavBar />
          {renderSummary()}
          {renderMealsSelector()}
          {renderConfirmation()}
        </OrderWrapper>
      </CSSTransition>
      <CSSTransition
        in={showStickyCart}
        classNames="sticky-cart-"
        timeout={1000}
        unmountOnExit={true}
      >
        <StickyCart setShowSummary={setShowSummary} />
      </CSSTransition>
    </OrderPageBackground>
  );

  function renderSummary() {
    return (
      <Summary
        showSummary={showSummary}
        hideSummary={hideSummary}
        setShowSummary={setShowSummary}
        setShowConfirmation={setShowConfirmation}
      />
    );
    function hideSummary() {
      setShowSummary(false);
    }
  }

  function renderMealsSelector() {
    return (
      <MealsSelector
        showConfirmation={showConfirmation}
        showSummary={showSummary}
        setShowSummary={setShowSummary}
        orderingStarted={orderingStarted}
        isorderingallowed={isOrderingAllowed}
      />
    );
  }
  function renderConfirmation() {
    return <Confirmation showConfirmation={showConfirmation} />;
  }
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.order.items,
    orderingStarted: state.order.orderingStarted,
  };
}

export default connect(mapStateToProps, {})(OrderPage);
