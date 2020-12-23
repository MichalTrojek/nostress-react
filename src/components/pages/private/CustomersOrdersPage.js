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
  const [newOrders, setNewOrders] = useState([]);
  const [confirmedOrders, setConfirmedOrders] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('orders').onSnapshot((onSnapshot) => {
      const tempOrders = [];
      const tempNewOrders = [];
      const tempConfirmedOrders = [];
      onSnapshot.forEach((doc) => {
        const order = { ...doc.data(), id: doc.id };

        if (order.isConfirmed) {
          tempConfirmedOrders.push(order);
        } else if (order.isNew) {
          tempNewOrders.push(order);
        }
        tempOrders.push(order);
        console.log(newOrders);
      });
      setOrders(tempOrders);
      setNewOrders(tempNewOrders);
      setConfirmedOrders(tempConfirmedOrders);

      console.log('new', newOrders);
      console.log('confirmed', confirmedOrders);
      console.log('all', orders);
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
          <OrdersContainer
            orders={orders}
            newOrders={newOrders}
            confirmedOrders={confirmedOrders}
          ></OrdersContainer>
        </Wrapper>
      </CustomersOrdersPageBackground>
    </PageLayout>
  );
};

export default CustomersOrdersPage;
