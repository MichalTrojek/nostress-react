import styled, { keyframes } from 'styled-components';
import { slideInUp } from 'react-animations';
import OrderBreakfastMenu from './Menus/OrderBreakfastMenu';
import OrderMainMenu from './Menus/OrderMainMenu';
import Button from '../../../../common/Button';
import Cart from './Cart';

import { CSSTransition } from 'react-transition-group';
import './MealSelector.css';

const slideInUpAnimation = keyframes`${slideInUp}`;

const SlideInUpDiv = styled.div`
  animation: 1s ${slideInUpAnimation};
`;

const MealsSelectorContainerStyle = styled(CSSTransition)`
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
    cursor: ${(props) => (props.isOrderingAllowed ? 'pointer' : 'default')};

    &:hover,
    &:active {
      transform: ${(props) =>
        props.isOrderingAllowed ? 'translateY(-0.2rem)' : ' translateY(0)'};
    }
  }

  @media only screen and (max-width: 411px) {
    .button {
      font-size: 1.4rem;
    }
  }
`;

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
    }
  }

  return (
    <MealsSelectorContainerStyle
      in={!showSummary}
      timeout={1000}
      classNames="mealSelector-"
      isOrderingAllowed={isOrderingAllowed}
      key="OrderPicker"
    >
      <div className="mealSelector">
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
      </div>
    </MealsSelectorContainerStyle>
  );
};

export default MealsSelector;
