import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

import Cart from './Cart';

import Button from '../../../common/Button';

import OrderItem from './OrderItem';
import { useHistory } from 'react-router-dom';

import { showInfoToast } from '../../../../notifications/toast';

import OrderContainer from './styles/OrderContainer';
import MealListContainer from './styles/MealListContainer';

const OrderBreakfastMenu = ({ breakfast = [], items = [] }) => {
  const [isOrderingAllowed, setIsOrderingAllowed] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (breakfast.length === 0) {
      history.push('/');
    } else {
      setIsOrderingAllowed(items.length > 0);
    }
  }, [history, breakfast.length, items]);

  return (
    <OrderContainer>
      <h1>Snídaňové menu 8:00 – 10:30</h1>
      <Cart />
      <Button className="orderButton" primary onClick={handleOrder}>
        Pokračovat k objednávce
      </Button>
      <MealListContainer>{renderBreakfast()}</MealListContainer>
    </OrderContainer>
  );

  function handleOrder() {
    if (isOrderingAllowed) {
      history.push('/summary');
    } else {
      showInfoToast('Objednávka je prázdná');
    }
  }

  function renderBreakfast() {
    return breakfast.map((meal, index) => {
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

function mapStateToProps(state, ownProps) {
  return {
    breakfast: state.menu.breakfast,
  };
}

export default connect(mapStateToProps)(OrderBreakfastMenu);
