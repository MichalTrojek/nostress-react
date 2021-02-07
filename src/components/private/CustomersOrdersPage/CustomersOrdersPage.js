import { useEffect, useState } from 'react';
import styled from 'styled-components';

import PageLayout from '../../PageLayout';
import PrivateNavBar from '../../common/PrivateNavBar';
import Wrapper from '../../common/Wrapper';

import CustomerOrders from './CustomerOrders';

import Button from '../../common/Button';
import AllowOrderingRadioGroup from './AllowOrderingRadioGroup';
import OrderHistory from './OrdersHistory';

import { sortByOrderNumber } from '../../../utils/orderUtils';

import { db } from '../../../firebase';

const CustomersOrdersPageBackground = styled.div`
  background-color: black;
  min-height: 100vh;
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;

  /* padding: 2% 0rem; */
  margin-bottom: 2%;

  Button {
    text-transform: none;
    align-self: flex-end;
  }
`;

const CustomersOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const unsubscribe = db.collection('orders').onSnapshot((onSnapshot) => {
      const tempOrders = [];
      onSnapshot.forEach((doc) => {
        const order = { ...doc.data(), id: doc.id };
        tempOrders.push(order);
      });
      setOrders(tempOrders);
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
          <OrderHeader>
            <h1>{showHistory ? 'Historie objednávek' : 'Objednávky'}</h1>
            <Button primary onClick={() => setShowHistory(!showHistory)}>
              {showHistory
                ? 'Zobrazit objednávky'
                : 'Zobrazit historii objednávek'}
            </Button>
          </OrderHeader>

          {showHistory ? <OrderHistory /> : renderOrders()}
        </Wrapper>
      </CustomersOrdersPageBackground>
    </PageLayout>
  );

  function renderOrders() {
    return (
      <div>
        <AllowOrderingRadioGroup />
        <CustomerOrders orders={sortByOrderNumber(orders)}></CustomerOrders>
      </div>
    );
  }
};

export default CustomersOrdersPage;
