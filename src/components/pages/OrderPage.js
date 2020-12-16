import styled from 'styled-components';
import Wrapper from '../common/Wrapper';
import OrderMainMenu from '../layouts/public/Orders/OrderMainMenu';

const OrderPageBackground = styled.section`
  background-color: black;
  min-height: 100vh;
`;

const OrderPage = () => {
  return (
    <OrderPageBackground>
      <Wrapper>
        <OrderMainMenu />
      </Wrapper>
    </OrderPageBackground>
  );
};

export default OrderPage;
