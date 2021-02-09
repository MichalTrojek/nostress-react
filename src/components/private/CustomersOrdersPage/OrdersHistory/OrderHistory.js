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
  const [currentIndex, setCurrentIndex] = useState(0);
  const PAGE_SIZE = 5;

  useEffect(() => {
    fetchFirst();
  }, []);

  useEffect(() => {
    fetchPage();
  }, [currentIndex]);

  async function fetchFirst() {
    const first = db
      .collection('orderHistory')
      .orderBy('orderNumber')
      .startAt(0)
      .endAt(PAGE_SIZE);

    const orders = await first.get().then((documentSnapshots) => {
      const data = [];
      documentSnapshots.forEach((doc) => {
        data.push(doc.data());
      });

      return data;
    });
    setPage(orders);
  }

  async function fetchPage() {
    const first = db
      .collection('orderHistory')
      .orderBy('orderNumber')
      .startAt(currentIndex + 1)
      .endAt(currentIndex + PAGE_SIZE);

    const orders = await first.get().then((documentSnapshots) => {
      const data = [];
      documentSnapshots.forEach((doc) => {
        data.push(doc.data());
      });
      return data;
    });
    setPage(orders);
  }

  return (
    <Background>
      <Wrapper>
        <HistoryButtonsContainer>
          <Button primary onClick={handlePrevButton}>
            Předchozí
          </Button>
          <Button primary onClick={handleNextButton}>
            Další
          </Button>
        </HistoryButtonsContainer>
        <OrderHistoryItemsList>{renderPage()}</OrderHistoryItemsList>
      </Wrapper>
    </Background>
  );

  function handlePrevButton() {
    setCurrentIndex(currentIndex - PAGE_SIZE);
  }

  function handleNextButton() {
    setCurrentIndex(currentIndex + PAGE_SIZE);
  }

  function renderPage() {
    return page.map((order) => {
      return <OrderHistoryItem key={order.id} order={order} />;
    });
  }
};

export default OrderHistory;
