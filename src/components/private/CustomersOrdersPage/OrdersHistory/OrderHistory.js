import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Background from '../../../common/Background';
import Wrapper from '../../../common/Wrapper';
import OrderHistoryItem from './OrderHistoryItem';

import Button from '../../../common/Button';

import { db } from '../../../../firebase';

const OrderHistoryItemsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const HistoryButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  Button {
    width: 25%;
    text-transform: none;
  }
`;

const OrderHistory = () => {
  const [page, setPage] = useState([]);

  useEffect(async () => {
    const first = db.collection('orderHistory').orderBy('orderNumber').limit(2);
    const orders = await first.get().then((documentSnapshots) => {
      const data = [];

      documentSnapshots.forEach((doc) => {
        data.push(doc.data());
      });
      return data;
      // let lastVisible =
      //   documentSnapshots.docs[documentSnapshots.docs.length - 1];

      // console.log('last ' + lastVisible);

      // const next = db
      //   .collection('orderHistory')
      //   .orderBy('orderNumber')
      //   .startAfter(lastVisible)
      //   .limit(2);
    });

    setPage(orders);
  }, []);

  return (
    <Background>
      <Wrapper>
        <HistoryButtonsContainer>
          <Button primary>Předchozí</Button>
          <Button primary>Další</Button>
        </HistoryButtonsContainer>
        <OrderHistoryItemsList>{renderPage()}</OrderHistoryItemsList>
      </Wrapper>
    </Background>
  );

  function renderPage() {
    return page.map((order) => {
      return <OrderHistoryItem key={order.id} order={order} />;
    });
  }
};

export default OrderHistory;
