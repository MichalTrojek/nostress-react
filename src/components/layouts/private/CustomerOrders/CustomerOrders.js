import styled from 'styled-components';

import OrderedItem from '../CustomerOrders/OrderedItem';

const OrdersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CustomerOrders = ({ orders }) => {
  return (
    <OrdersContainer>
      {orders.map((order, index) => {
        return <OrderedItem key={index} order={order} />;
      })}
    </OrdersContainer>
  );
};

export default CustomerOrders;
