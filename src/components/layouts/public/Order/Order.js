import styled from 'styled-components';
import Cart from './Cart';
import OrderMealPicker from './OrderMealPicker/OrderMealPicker';
import Button from '../../../common/Button';

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  Button {
    margin-top: 1rem;
    @media only screen and (max-width: 411px) {
      font-size: 1.2rem;
    }
  }
`;

const Order = () => {
  return (
    <OrderContainer>
      <h1>Týdenní menu 11:00 – 16:00</h1>
      <Cart />
      <Button className="orderButton" primary onClick={handleOrder}>
        Pokračovat k objednávce
      </Button>
      <OrderMealPicker />
    </OrderContainer>
  );

  function handleOrder() {}
};

export default Order;
