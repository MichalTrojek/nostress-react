import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Background from '../../../common/Background';
import Wrapper from '../../../common/Wrapper';
import OrderHistoryItem from './OrderHistoryItem';

import Button from '../../../common/Button';

import { fetchFirst, fetchPage } from './api/pagination';

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
  const PAGE_SIZE = 10;

  useEffect(() => {
    fetchFirst(setPage, PAGE_SIZE);
  }, []);

  useEffect(() => {
    fetchPage(setPage, setCurrentIndex, currentIndex, PAGE_SIZE);
  }, [currentIndex]);

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
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - PAGE_SIZE);
    }
  }

  function handleNextButton() {
    if (page.length === PAGE_SIZE) {
      setCurrentIndex(currentIndex + PAGE_SIZE);
    }
  }

  function renderPage() {
    return page.map((order) => {
      return <OrderHistoryItem key={order.id} order={order} />;
    });
  }
};

export default OrderHistory;
