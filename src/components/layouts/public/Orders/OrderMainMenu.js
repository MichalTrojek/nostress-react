import { connect } from 'react-redux';

import OrderItem from './OrderItem';

import MealListContainer from './styles/MealListContainer';

const OrderMainMenu = ({ meals = [], childMeals = [], soup = undefined }) => {
  return (
    <>
      <h1 style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>Hlavní menu</h1>
      <MealListContainer>{renderMainMenu()}</MealListContainer>
      <h1 style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>Dětské menu</h1>
      <MealListContainer>{renderChildMenu()}</MealListContainer>
      {renderSoup(soup)}
    </>
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
    return meals.map((meal, index) => {
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
    <>
      <h1 style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>Polévky</h1>
      <OrderItem name={soup.name} price={soup.price} />
    </>
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
  const soups = state.soups;
  const soup = {
    name: selectSoupByDay(new Date().getDay(), soups),
    price: soups.price,
  };

  return {
    meals: state.menu.meals,
    childMeals: state.menu.childMeals,
    soup: soup,
    items: state.order.items,
  };
}

export default connect(mapStateToProps)(OrderMainMenu);
