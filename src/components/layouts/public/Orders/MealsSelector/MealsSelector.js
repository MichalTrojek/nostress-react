import { motion } from 'framer-motion';

import styled, { keyframes } from 'styled-components';
import { slideInUp } from 'react-animations';
import OrderBreakfastMenu from './Menus/OrderBreakfastMenu';
import OrderMainMenu from './Menus/OrderMainMenu';
import { showInfoToast } from '../../../../../notifications/toast';
import Button from '../../../../common/Button';
import Cart from './Cart';

const slideInUpAnimation = keyframes`${slideInUp}`;

const SlideInUpDiv = styled.div`
  animation: 1s ${slideInUpAnimation};
`;

const MealsSelectorContainerStyle = styled(motion.div)`
  display: flex;
  flex-direction: column;

  .heading {
    padding-bottom: 1rem;
  }
  .button {
    margin-top: 1rem;
    background-color: ${(props) =>
      props.isOrderingAllowed ? 'var(--color-tertiary)' : 'transparent'};
    color: ${(props) => (props.isOrderingAllowed ? 'black' : 'white')};
    border: 1px solid
      ${(props) => (props.isOrderingAllowed ? 'var(--color-tertiary)' : 'grey')};
  }

  @media only screen and (max-width: 411px) {
    .button {
      font-size: 1.4rem;
    }
  }
`;

const mealsSelectorVariant = {
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

const MealsSelector = ({
  showSummary,
  setShowSummary,
  orderingStarted,
  isOrderingAllowed,
}) => {
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

  return (
    <MealsSelectorContainerStyle
      isOrderingAllowed={isOrderingAllowed}
      variants={mealsSelectorVariant}
      animate={showSummary ? 'hidden' : 'visible'}
      key="OrderPicker"
      exit="exit"
    >
      <h1 className="heading">{renderHeader()}</h1>
      <Cart />
      <Button
        disabled={!isOrderingAllowed}
        className="button"
        primary
        onClick={handleOrder}
      >
        Pokračovat k objednávce
      </Button>
      {renderMenu()}
    </MealsSelectorContainerStyle>
  );
};

export default MealsSelector;
