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
import { subscribeToOrders } from './api/subscribeToOrders';

const CustomersOrdersPageBackground = styled.div`
  background-color: black;
  min-height: 100vh;
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2%;

  Button {
    text-transform: none;
    align-self: flex-end;
  }
`;

const CustomersOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [playAlarm, setPlayAlarm] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeToOrders(setOrders, setPlayAlarm);
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
              {showHistory ? 'Objednávky' : 'Historie'}
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
        <CustomerOrders
          playAlarm={playAlarm}
          setPlayAlarm={setPlayAlarm}
          orders={sortByOrderNumber(orders)}
        ></CustomerOrders>
      </div>
    );
  }
};

export default CustomersOrdersPage;
