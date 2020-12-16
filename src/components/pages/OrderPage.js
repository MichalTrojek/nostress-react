import styled from 'styled-components';
import Wrapper from '../common/Wrapper';
import Order from '../layouts/public/Order';

const OrderPageBackground = styled.section`
  background-color: black;
  min-height: 100vh;
`;

const OrderPage = () => {
  return (
    <OrderPageBackground>
      <Wrapper>
        <Order />
      </Wrapper>
    </OrderPageBackground>
  );
};

export default OrderPage;
