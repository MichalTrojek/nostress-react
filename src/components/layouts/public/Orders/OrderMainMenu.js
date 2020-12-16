import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

import Cart from './Cart';

import Button from '../../../common/Button';

import OrderItem from './OrderItem';
import { useHistory } from 'react-router-dom';

import { showInfoToast } from '../../../../notifications/toast';
import OrderContainer from './styles/OrderContainer';
import MealListContainer from './styles/MealListContainer';

const OrderMainMenu = ({
  meals = [],
  childMeals = [],
  soup = undefined,
  items = [],
}) => {
  const [isOrderingAllowed, setIsOrderingAllowed] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (meals.length === 0) {
      history.push('/');
    } else {
      setIsOrderingAllowed(items.length > 0);
    }
  }, [history, meals.length, items]);

  return (
    <OrderContainer>
      <h1>Týdenní menu 11:00 – 16:00</h1>
      <Cart />
      <Button className="orderButton" primary onClick={handleOrder}>
        Pokračovat k objednávce
      </Button>

      <h1 style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>Hlavní menu</h1>
      <MealListContainer>{renderMainMenu()}</MealListContainer>
      <h1 style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>Dětské menu</h1>
      <MealListContainer>{renderChildMenu()}</MealListContainer>
      <h1 style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>Polévky</h1>
      {renderSoup(soup)}
    </OrderContainer>
  );

  function handleOrder() {
    if (isOrderingAllowed) {
      history.push('/summary');
    } else {
      showInfoToast('Objednávka je prázdná');
    }
  }

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
  return soup ? <OrderItem name={soup.name} price={soup.price} /> : <></>;
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
      return soups.thurday;
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
