import styled from 'styled-components';

import OrderBreakfastMenu from './Menus/OrderBreakfastMenu';
import OrderMainMenu from './Menus/OrderMainMenu';
import Button from '../../../../common/Button';
import Cart from './Cart';

import { CSSTransition } from 'react-transition-group';
import './MealSelector.css';

const MealsSelectorContainerStyle = styled(CSSTransition)`
  display: flex;
  flex-direction: column;

  overflow-y: hidden;
  overflow-x: hidden;

  min-height: 100vh;

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
  showConfirmation,
  showSummary,
  setShowSummary,
  orderingStarted,
  isOrderingAllowed,
}) => {
  function renderMenu() {
    return orderingStarted.menuType === 'MainMenu' ? (
      <OrderMainMenu />
    ) : (
      <OrderBreakfastMenu />
    );
  }

  return (
    <MealsSelectorContainerStyle
      in={!showSummary && !showConfirmation}
      timeout={1000}
      classNames="mealSelector-"
      isOrderingAllowed={isOrderingAllowed}
      unmountOnExit={showConfirmation}
    >
      <div className="mealSelector">{renderMenu()}</div>
    </MealsSelectorContainerStyle>
  );
};

export default MealsSelector;
