import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import Wrapper from '../../common/Wrapper';
import Button from '../../common/Button';

import OrderBreakfastMenu from '../../layouts/public/Orders/OrderBreakfastMenu';
import OrderContainer from '../../layouts/public/Orders/OrderContainer';
import OrderMainMenu from '../../layouts/public/Orders/OrderMainMenu';
import GoBackNavBar from '../../layouts/public/Orders/GoBackNavBar';
import Summary from '../../layouts/public/Orders/Summary';

import Cart from '../../layouts/public/Orders/Cart';

import { showInfoToast } from '../../../notifications/toast';

import { motion, AnimatePresence } from 'framer-motion';

import styled, { keyframes } from 'styled-components';
import { slideInUp } from 'react-animations';

const slideInUpAnimation = keyframes`${slideInUp}`;

const SlideInUpDiv = styled.div`
  animation: 1s ${slideInUpAnimation};
`;

const OrderPageBackground = styled.section`
  background-color: black;
  min-height: 100vh;
  overflow-x: hidden;
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
  }, [items, orderingStarted.status, history]);

  const containerVariants = {
    hidden: { x: '100vw' },
    visible: {
      x: 0,
      transition: { delay: 0, duration: 0.5 },
    },
    exit: {
      x: '100vw',
      transition: { delay: 0, duration: 0.5 },
    },
  };

  return (
    <OrderPageBackground>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key="orderpage"
        exit="exit"
      >
        <Wrapper>
          <GoBackNavBar />
          <AnimatePresence>
            {renderSummary()}
            {renderMenuPicker()}
          </AnimatePresence>
        </Wrapper>
      </motion.div>
    </OrderPageBackground>
  );

  function renderSummary() {
    return <Summary showSummary={showSummary} hideSummary={hideSummary} />;
    function hideSummary() {
      setShowSummary(false);
    }
  }

  function renderMenuPicker() {
    const pickerVariant = {
      hidden: { display: 'none', x: '-100vw' },
      exit: {
        x: '-100vw',
        transition: { delay: 0, duration: 0.5 },
        transitionEnd: {
          display: 'none',
        },
      },
      visible: {
        x: 0,
        display: 'flex',
        transition: { delay: 0, duration: 0.5 },
      },
    };
    return (
      <OrderContainer
        variants={pickerVariant}
        animate={showSummary ? 'hidden' : 'visible'}
        key="OrderPicker"
        exit="exit"
      >
        <h1 className="orderContainer__heading">{renderHeader()}</h1>
        <Cart />
        <Button
          className="orderContainer__button"
          primary
          onClick={handleOrder}
        >
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
      <SlideInUpDiv>
        <OrderMainMenu />
      </SlideInUpDiv>
    ) : (
      <SlideInUpDiv>
        <OrderBreakfastMenu />
      </SlideInUpDiv>
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
