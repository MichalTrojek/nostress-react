import styled from 'styled-components';
import { useState, useEffect } from 'react';

import Button from '../../../common/Button';
import OrderedItem from '../CustomerOrders/OrderedItem';

const ShowButtons = styled.div`
  padding-top: 1rem;
  display: grid;

  row-gap: 1rem;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 1rem;
    .showNewButton {
      grid-column: 1 / span 4;
    }
    .showConfirmedButton {
      grid-column: 5 / span 4;
    }
    .showAllButton {
      grid-column: 9 / span 4;
    }
  }

  Button {
    font-size: 1rem;
    @media only screen and (min-width: 411px) {
      font-size: 1.3rem;
    }

    @media only screen and (min-width: 768px) {
      font-size: 1.4rem;
    }
    @media only screen and (min-width: 1200px) {
      font-size: 1.9rem;
    }
  }

  .showNewButton {
    background-color: ${(props) =>
      props.showNewsOrders ? 'forestGreen' : 'transparent'};
    border: 1px solid forestGreen;
    color: white;
    /* display: ${(props) => (props.showNewsOrders ? 'block' : 'none')};
    opacity: ${(props) => (props.showNewsOrders ? '1' : '0')}; */
  }

  .showConfirmedButton {
    color: white;
    background-color: ${(props) =>
      props.showConfirmedOrders ? 'transparent' : '#6f6150'};
    border: 1px solid #6f6150;
    /* display: ${(props) => (props.showConfirmed ? 'block' : 'none')};
    opacity: ${(props) => (props.showConfirmed ? '1' : '0')}; */
  }
  .showAllButton {
    background-color: ${(props) => (props.showNewsOrders ? '#f2c48c' : 'grey')};
    border: 1px solid grey;
    /* display: ${(props) => (props.showAll ? 'block' : 'none')};
    opacity: ${(props) => (props.showAll ? '1' : '0')}; */
  }
`;

const OrdersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;
`;

const CustomerOrders = ({
  orders = [],
  newOrders = [],
  confirmedOrders = [],
}) => {
  const [enableNewOrdersButton, setEnableNewOrdersButton] = useState(false);
  const [enableConfirmedButton, setEnableConfirmedButton] = useState(false);
  const [enableAllButton, setEnableAllButton] = useState(false);

  const [showAll, setShowAll] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirmed, setShowConfirmed] = useState(false);

  useEffect(() => {
    setEnableNewOrdersButton(newOrders.length > 0);
    setEnableConfirmedButton(confirmedOrders.length > 0);
    setEnableAllButton(newOrders.length > 0 && confirmedOrders.length > 0);
  }, [orders, newOrders, confirmedOrders, showNew, showConfirmed, showAll]);

  return (
    <>
      <ShowButtons
        showNewsOrders={enableNewOrdersButton}
        showConfirmed={enableConfirmedButton}
        showAll={enableAllButton}
      >
        <Button primary className="showNewButton" onClick={handleShowNew}>
          {enableNewOrdersButton
            ? `zobrazit Nové ${renderCount(newOrders)}`
            : 'žadné nové'}
        </Button>
        <Button
          primary
          className="showConfirmedButton"
          onClick={handleShowConfirmed}
        >
          zobrazit Potvrzené {renderCount(confirmedOrders)}
        </Button>
        <Button primary className="showAllButton" onClick={handleShowAll}>
          zobrazit všechny {renderCount(orders)}
        </Button>
      </ShowButtons>
      <OrdersContainer>{renderOrderedItems()}</OrdersContainer>
    </>
  );

  function handleShowConfirmed() {
    if (enableConfirmedButton) {
      setShowConfirmed(true);
      setShowAll(false);
      setShowNew(false);
    }
  }

  function handleShowAll() {
    if (enableAllButton) {
      setShowConfirmed(false);
      setShowAll(true);
      setShowNew(false);
    }
  }

  function handleShowNew() {
    if (enableNewOrdersButton) {
      setShowConfirmed(false);
      setShowAll(false);
      setShowNew(true);
    }
  }

  function renderCount(items) {
    return items.length > 0 ? `(${items.length} obj.)` : '';
  }

  function renderOrderedItems() {
    let items = [];
    if (showAll) {
      items = orders;
    } else if (showConfirmed) {
      items = confirmedOrders;
    } else if (showNew) {
      items = newOrders;
    }
    return items.map((order, index) => {
      return <OrderedItem key={index} order={order} />;
    });
  }
};

export default CustomerOrders;
