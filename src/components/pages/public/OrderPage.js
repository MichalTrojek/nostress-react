import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import Wrapper from '../../common/Wrapper';

import MealsSelector from '../../layouts/public/Orders/MealsSelector';
import OrderNavBar from '../../layouts/public/Orders/OrderNavBar';
import Summary from '../../layouts/public/Orders/Summary';

import { motion } from 'framer-motion';

import styled from 'styled-components';

const OrderPageBackground = styled.section`
  background-color: black;
  overflow-x: hidden;
  padding-bottom: 5rem;
`;

const OrderWrapper = styled(Wrapper)`
  position: relative;
  max-height: max-content;
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
        <OrderWrapper>
          <OrderNavBar />
          {renderSummary()}
          {renderMealsSelector()}
        </OrderWrapper>
      </motion.div>
    </OrderPageBackground>
  );

  function renderSummary() {
    return (
      <Summary
        key="summaryKey"
        showSummary={showSummary}
        hideSummary={hideSummary}
      />
    );
    function hideSummary() {
      setShowSummary(false);
    }
  }

  function renderMealsSelector() {
    return (
      <MealsSelector
        key="mealSelectorKey"
        showSummary={showSummary}
        setShowSummary={setShowSummary}
        orderingStarted={orderingStarted}
        isOrderingAllowed={isOrderingAllowed}
      />
    );
  }
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.order.items,
    orderingStarted: state.order.orderingStarted,
  };
}

export default connect(mapStateToProps, {})(OrderPage);
