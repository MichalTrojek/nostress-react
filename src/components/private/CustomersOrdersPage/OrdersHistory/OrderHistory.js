import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Background from '../../../common/Background';
import Wrapper from '../../../common/Wrapper';
import OrderHistoryItem from './OrderHistoryItem';

import Button from '../../../common/Button';

import { fetchLastOrderNumber, fetchPage } from './api/pagination';

const OrderHistoryItemsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const HistoryButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  Button {
    width: 49%;
    text-transform: none;
    @media only screen and (min-width: 768px) {
      width: 25%;
    }
  }
`;

const OrderHistory = () => {
  const [page, setPage] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const PAGE_SIZE = 10;

  useEffect(() => {
    fetchLastOrderNumber(setCurrentIndex);
  }, []);

  useEffect(() => {
    fetchPage(setPage, setCurrentIndex, currentIndex, PAGE_SIZE);
  }, [currentIndex]);

  return (
    <Background>
      <Wrapper>
        <HistoryButtonsContainer>
          <Button primary onClick={handleNewerButton}>
            Novější
          </Button>
          <Button primary onClick={handleOlderButton}>
            Starší
          </Button>
        </HistoryButtonsContainer>
        <OrderHistoryItemsList>{renderPage()}</OrderHistoryItemsList>
      </Wrapper>
    </Background>
  );

  function handleNewerButton() {
    if (page.length !== PAGE_SIZE) {
      setCurrentIndex(currentIndex + PAGE_SIZE);
    }
  }

  function handleOlderButton() {
    if (page.length === PAGE_SIZE) {
      setCurrentIndex(currentIndex - PAGE_SIZE);
    }
  }

  function renderPage() {
    return page.map((order) => {
      return <OrderHistoryItem key={order.id} order={order} />;
    });
  }
};

export default OrderHistory;
