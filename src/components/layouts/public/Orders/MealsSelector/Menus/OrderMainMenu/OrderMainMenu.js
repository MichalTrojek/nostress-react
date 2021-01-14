import { connect } from 'react-redux';

import OrderItem from '../OrderItem';

import MealListContainer from '../MealListContainer';

import sortOutMenusByType from '../../../../../../../utils/mealUtils';

import { CSSTransition } from 'react-transition-group';
import '../menu.css';

const OrderMainMenu = ({
  weeklyMeals = [],
  childMeals = [],
  soup = undefined,
}) => {
  return (
    <CSSTransition in={true} classNames="menu-" timeout={1000} appear={true}>
      <div>
        <h1 style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
          Hlavní menu
        </h1>
        <MealListContainer>{renderMainMenu()}</MealListContainer>
        <h1 style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
          Dětské menu
        </h1>
        <MealListContainer>{renderChildMenu()}</MealListContainer>
        <h1 style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>Polévky</h1>
        <MealListContainer>{renderSoup(soup)}</MealListContainer>
      </div>
    </CSSTransition>
  );

  function renderChildMenu() {
    return childMeals.map((meal, index) => {
      return (
        <OrderItem
          key={index}
          name={meal.name}
          price={meal.price}
          alergens={meal.alergens}
        />
      );
    });
  }

  function renderMainMenu() {
    return weeklyMeals.map((meal, index) => {
      return (
        <OrderItem
          key={index}
          name={meal.name}
          price={meal.price}
          alergens={meal.alergens}
        />
      );
    });
  }
};

function renderSoup(soup) {
  return soup.name.length > 0 ? (
    <OrderItem name={soup.name} price={soup.price} />
  ) : (
    <></>
  );
}

function selectSoupByDay(day, soups) {
  switch (day) {
    case 1:
      return soups.monday;
    case 2:
      return soups.tuesday;
    case 3:
      return soups.wednesday;
    case 4:
      return soups.thursday;
    case 5:
      return soups.friday;
    default:
      return '';
  }
}

function mapStateToProps(state, ownProps) {
  const { weeklyMeals, childMeals } = sortOutMenusByType(state.data.meals);
  const soups = state.data.soups;
  const soup = {
    name: selectSoupByDay(new Date().getDay(), soups),
    price: soups.price,
  };
  return {
    weeklyMeals: weeklyMeals,
    childMeals: childMeals,
    soup: soup,
  };
}

export default connect(mapStateToProps)(OrderMainMenu);
