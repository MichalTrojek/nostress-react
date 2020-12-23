import { useEffect, useState } from 'react';
import styled from 'styled-components';

import PageLayout from '../../PageLayout';
import PrivateNavBar from '../../layouts/private/PrivateNavBar';

import OrdersContainer from '../../layouts/private/CustomerOrders';
import Wrapper from '../../common/Wrapper';
import Background from '../../common/Background';

import { db } from '../../../firebase';

const CustomersOrdersPageBackground = styled(Background)`
  background-color: black;
  min-height: 100vh;
`;

const CustomersOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('orders').onSnapshot((onSnapshot) => {
      const orders = [];
      onSnapshot.forEach((doc) => {
        orders.push(doc.data());
      });
      setOrders(orders);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <PageLayout>
      <CustomersOrdersPageBackground>
        <Wrapper>
          <PrivateNavBar />
          <h1>Objednávky</h1>
          <OrdersContainer orders={orders}></OrdersContainer>
        </Wrapper>
      </CustomersOrdersPageBackground>
    </PageLayout>
  );
};

export default CustomersOrdersPage;