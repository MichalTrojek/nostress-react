import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Background from '../../../common/Background';
import Wrapper from '../../../common/Wrapper';
import OrderHistoryItem from './OrderHistoryItem';

import FormGroup from '../../../common/Forms/FormGroup';

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

const SearchContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;

  .emailSearchFormGroup {
    width: 50%;
    margin-right: 2rem;
  }

  .emailSearchButton {
    text-transform: none;
    margin-bottom: 1.3rem;
  }
`;

const OrderHistory = () => {
  const [page, setPage] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [email, setEmail] = useState('');
  const [maxSize, setMaxSize] = useState(0);
  const PAGE_SIZE = 10;

  useEffect(() => {
    fetchLastOrderNumber(setCurrentIndex, setMaxSize);
  }, []);

  useEffect(() => {
    fetchPage(setPage, setCurrentIndex, currentIndex, PAGE_SIZE);
  }, [currentIndex]);

  return (
    <Background>
      <Wrapper>
        {showSearch ? renderSearch() : renderHistoryButtons()}
        <OrderHistoryItemsList>{renderPage()}</OrderHistoryItemsList>
      </Wrapper>
    </Background>
  );

  function renderSearch() {
    return (
      <SearchContainer>
        <FormGroup className="emailSearchFormGroup">
          <input
            type="text"
            placeholder="Hledat email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="searchEmailInput"
          />
          <label htmlFor="searchEmailInput">Hledat email</label>
        </FormGroup>
        <Button
          className="emailSearchButton"
          primary
          onClick={handleSearchEmailButton}
          Vyhledat
          email
        >
          Vyhledat
        </Button>
      </SearchContainer>
    );
  }

  function handleSearchEmailButton() {
    console.log('TET');
  }

  function renderHistoryButtons() {
    return (
      <HistoryButtonsContainer>
        <Button primary onClick={handleNewerButton}>
          Novější
        </Button>
        <Button primary onClick={handleSearchButton}>
          Vyhledavaní
        </Button>
        <Button primary onClick={handleOlderButton}>
          Starší
        </Button>
      </HistoryButtonsContainer>
    );
  }

  function handleSearchButton() {
    setShowSearch(!showSearch);
  }

  function handleNewerButton() {
    if (currentIndex !== maxSize) {
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
