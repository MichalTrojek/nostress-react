import styled from 'styled-components';
import { useState, useEffect } from 'react';

import Button from '../../../common/Button';
import OrderedItem from '../CustomerOrders/OrderedItem';
import { showInfoToast } from '../../../../notifications/toast';

const CustomerOrdersContainer = styled.div`
  position: relative;
`;

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
  }

  .showConfirmedButton {
    color: white;
    background-color: ${(props) =>
      props.showConfirmedOrders ? '#f2c48c' : 'transparent'};
    border: 1px solid #f2c48c;
  }
  .showAllButton {
    background-color: ${(props) =>
      props.showAllOrders ? '#f2c48c' : 'transparent'};
    border: 1px solid #f2c48c;
    color: white;
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
    setEnableAllButton(newOrders.length > 0 || confirmedOrders.length > 0);
  }, [orders, newOrders, confirmedOrders, showNew, showConfirmed, showAll]);

  return (
    <CustomerOrdersContainer>
      <ShowButtons
        showNewsOrders={enableNewOrdersButton}
        showConfirmed={enableConfirmedButton}
        showAll={enableAllButton}
      >
        <Button primary className="showNewButton" onClick={handleShowNew}>
          {enableNewOrdersButton
            ? `zobrazit nové ${renderCount(newOrders)}`
            : 'žadné nové'}
        </Button>
        <Button
          primary
          className="showConfirmedButton"
          onClick={handleShowConfirmed}
        >
          {enableConfirmedButton
            ? `zobrazit potvrzené ${renderCount(confirmedOrders)}`
            : 'žadné potvrzené'}
        </Button>
        <Button primary className="showAllButton" onClick={handleShowAll}>
          {enableAllButton
            ? `zobrazit všechny ${renderCount(orders)}`
            : 'žadné k zobrazení'}
        </Button>
      </ShowButtons>
      <OrdersContainer>{renderOrderedItems()}</OrdersContainer>
    </CustomerOrdersContainer>
  );

  function handleShowConfirmed() {
    if (enableConfirmedButton) {
      setShowConfirmed(true);
      setShowAll(false);
      setShowNew(false);
    } else {
      showInfoToast('Nejsou žádné potvrzené objednávky');
    }
  }

  function handleShowAll() {
    if (enableAllButton) {
      setShowConfirmed(false);
      setShowAll(true);
      setShowNew(false);
    } else {
      showInfoToast('Nejsou žádné objednávky');
    }
  }

  function handleShowNew() {
    if (enableNewOrdersButton) {
      setShowConfirmed(false);
      setShowAll(false);
      setShowNew(true);
    } else {
      showInfoToast('Nejsou žádné nové objednávky');
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
