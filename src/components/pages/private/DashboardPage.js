import { useEffect, useState } from 'react';
import styled from 'styled-components';

import PageLayout from '../../PageLayout';
import PrivateNavBar from '../../layouts/private/PrivateNavBar';

import Wrapper from '../../common/Wrapper';
import Background from '../../common/Background';

import { db } from '../../../firebase';

const DashboardBackground = styled(Background)`
  background-color: black;
  min-height: 100vh;
`;

const DashboardPage = () => {
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
      <DashboardBackground>
        <Wrapper>
          <PrivateNavBar />
          <h1>Objednávky</h1>
          {orders.map((item) => {
            return <p>{item.name}</p>;
          })}
        </Wrapper>
      </DashboardBackground>
    </PageLayout>
  );
};

export default DashboardPage;
