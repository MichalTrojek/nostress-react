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
        } else {
          tempNewOrders.push(order);
        }
        tempOrders.push(order);
      });
      setOrders(tempOrders);
      setNewOrders(tempNewOrders);
      setConfirmedOrders(tempConfirmedOrders);
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
            orders={sortByOrderNumber(orders)}
            newOrders={sortByOrderNumber(newOrders)}
            confirmedOrders={sortByOrderNumber(confirmedOrders)}
          ></OrdersContainer>
        </Wrapper>
      </CustomersOrdersPageBackground>
    </PageLayout>
  );

  function sortByOrderNumber(items) {
    return items.sort((a, b) => a.orderNumber - b.orderNumber);
  }
};

export default CustomersOrdersPage;
