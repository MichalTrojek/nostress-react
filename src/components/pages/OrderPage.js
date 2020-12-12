import styled from 'styled-components';
import Wrapper from '../common/Wrapper';
import Order from '../layouts/public/Order';

const OrderPageBackground = styled.section`
  background-color: var(--color-quaternary);
  min-height: 100vh;
`;

const OrderPage = () => {
  return (
    <OrderPageBackground>
      <Wrapper>
        <h1>Objednávka rozvozu</h1>
        <Order />
      </Wrapper>
    </OrderPageBackground>
  );
};

export default OrderPage;
