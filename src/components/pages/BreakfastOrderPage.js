import styled from 'styled-components';
import Wrapper from '../common/Wrapper';
import OrderBreakfastMenu from '../layouts/public/Orders/OrderBreakfastMenu';

const OrderPageBackground = styled.section`
  background-color: black;
  min-height: 100vh;
`;

const OrderPage = () => {
  return (
    <OrderPageBackground>
      <Wrapper>
        <OrderBreakfastMenu />
      </Wrapper>
    </OrderPageBackground>
  );
};

export default OrderPage;
