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
    <div>
      <h1 style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>Polévky</h1>
      <OrderItem
        name={soup.name}
        price={soup.price}
        alergens={soup.alergens}
        isSoup={true}
      />
    </div>
  ) : (
    <></>
  );
}

function selectSoupByDay(day, soups) {
  switch (day) {
    case 1:
      return { name: soups.monday.name, alergens: soups.monday.alergens };
    case 2:
      return { name: soups.tuesday.name, alergens: soups.tuesday.alergens };
    case 3:
      return { name: soups.wednesday.name, alergens: soups.wednesday.alergens };
    case 4:
      return { name: soups.thursday.name, alergens: soups.thursday.alergens };
    case 5:
      return { name: soups.friday.name, alergens: soups.friday.alergens };
    default:
      return '';
  }
}

function mapStateToProps(state, ownProps) {
  const { weeklyMeals, childMeals } = sortOutMenusByType(state.data.meals);
  const soups = state.data.soups;
  const { name, alergens } = selectSoupByDay(new Date().getDay(), soups);
  const soup = {
    name: name,
    alergens: alergens,
    price: soups.price,
  };

  return {
    weeklyMeals: weeklyMeals,
    childMeals: childMeals,
    soup: soup,
  };
}

export default connect(mapStateToProps)(OrderMainMenu);
