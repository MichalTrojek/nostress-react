import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Background from '../../../common/Background';
import Wrapper from '../../../common/Wrapper';
import OrderHistoryItem from './OrderHistoryItem';

import FormGroup from '../../../common/Forms/FormGroup';

import Button from '../../../common/Button';

import { fetchLastOrderNumber, fetchPage } from './api/pagination';

import { searchOrdersByEmail } from './api/searchOrdersByEmail';

const OrderHistoryItemsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const HistoryButtonsContainer = styled.div`
  /* display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  Button {
    width: 49%;
    text-transform: none;
    @media only screen and (min-width: 768px) {
      width: 25%;
    }
  } */

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  margin-bottom: 1rem;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(32%, 1fr));
  }
`;

const SearchContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(32%, 1fr));
  }

  .emailSearchFormGroup {
  }

  .emailSearchButton {
    align-self: center;
    height: 4rem;
    margin-bottom: 1.5rem;
    text-transform: none;
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
        <Button className="emailSearchButton" primary onClick={handleSearching}>
          Vyhledat
        </Button>

        <Button
          className="emailSearchButton"
          primary
          onClick={handleGoBackButton}
        >
          Zpět
        </Button>
      </SearchContainer>
    );
  }

  function handleSearching() {
    if (email.length !== 0) {
      searchOrdersByEmail(setPage, email);
    }
  }

  function handleGoBackButton() {
    fetchPage(setPage, setCurrentIndex, currentIndex, PAGE_SIZE);
    setShowSearch(!showSearch);
    setEmail('');
  }

  function renderHistoryButtons() {
    return (
      <HistoryButtonsContainer>
        <Button primary onClick={handleNewerButton}>
          Novější
        </Button>
        <Button primary onClick={handleShowSearchButton}>
          Vyhledavaní
        </Button>
        <Button primary onClick={handleOlderButton}>
          Starší
        </Button>
      </HistoryButtonsContainer>
    );
  }

  function handleShowSearchButton() {
    setShowSearch(!showSearch);
    setPage([]);
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
