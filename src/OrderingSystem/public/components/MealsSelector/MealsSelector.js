import styled from 'styled-components';

import OrderBreakfastMenu from './Menus/OrderBreakfastMenu';
import OrderMainMenu from './Menus/OrderMainMenu';

import { CSSTransition } from 'react-transition-group';
import './MealSelector.css';

const MealsSelectorContainerStyle = styled(CSSTransition)`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: hidden;
  min-height: 100vh;
`;

const MealsSelector = ({
  showConfirmation,
  showSummary,
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
      unmountOnExit={showConfirmation}
    >
      <div className="mealSelector">{renderMenu()}</div>
    </MealsSelectorContainerStyle>
  );
};

export default MealsSelector;
