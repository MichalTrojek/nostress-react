import styled from 'styled-components';
import { useState, useEffect } from 'react';

import OrderedItem from './OrderedItem';
import RadioGroup from '../../../common/Forms/RadioGroup';
import { showInfoToast } from '../../../../notifications/toast';

import { sortByOrderNumber } from '../../../../utils/orderUtils';
import useSound from 'use-sound';
import AlertSound from '../../../../sound/alert.mp3';

const CustomerOrdersContainer = styled.div`
  position: relative;
`;

const CustomerOrdersRadioGroup = styled(RadioGroup)`
  padding-bottom: 3rem;
  label:nth-child(2) {
    background-color: ${(props) =>
      props.enableNewOrdersButton ? '#1D741B' : 'transparent'};
    border: 1px solid #1d741b;
  }

  input:checked + label {
    background-color: var(--color-tertiary);
    border: 1px solid var(--color-tertiary);
  }

  input:disabled + label {
    background-color: transparent;
    color: grey;
    border: 1px solid grey;
    cursor: default;
  }
`;
const OrdersContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
  }
`;

const CustomerOrders = ({ playAlarm, setPlayAlarm, orders = [], isMuted }) => {
  const [enableNewOrdersButton, setEnableNewOrdersButton] = useState(false);
  const [enableConfirmedButton, setEnableConfirmedButton] = useState(false);
  const [enableAllButton, setEnableAllButton] = useState(false);

  const [newOrders, setNewOrders] = useState([]);
  const [confirmedOrders, setConfirmedOrders] = useState([]);

  const [showAll, setShowAll] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirmed, setShowConfirmed] = useState(false);

  const [play, { stop }] = useSound(AlertSound);

  useEffect(() => {
    console.log('isMuted', isMuted);
    if (isMuted) {
      stop();
    }
  }, [isMuted]);

  useEffect(() => {
    if (playAlarm && !isMuted) {
      play();
      setPlayAlarm(false);
    }
  }, [newOrders, play, playAlarm]);

  useEffect(() => {
    const tempNewOrders = [];
    const tempConfirmedOrders = [];
    orders.forEach((order) => {
      if (order.isConfirmed) {
        tempConfirmedOrders.push(order);
      } else {
        tempNewOrders.push(order);
      }
    });
    setNewOrders(sortByOrderNumber(tempNewOrders));
    setConfirmedOrders(sortByOrderNumber(tempConfirmedOrders));
  }, [orders]);

  useEffect(() => {
    setEnableNewOrdersButton(newOrders.length > 0);
    setEnableConfirmedButton(confirmedOrders.length > 0);
    setEnableAllButton(newOrders.length > 0 || confirmedOrders.length > 0);
  }, [orders, newOrders, confirmedOrders]);

  return (
    <CustomerOrdersContainer>
      <CustomerOrdersRadioGroup
        enableNewOrdersButton={enableNewOrdersButton}
        enableConfirmedButton={enableConfirmedButton}
        enableAllButton={enableAllButton}
      >
        <input
          type="radio"
          name="orderRadioGroup"
          id="showNewId"
          onClick={handleShowNew}
          disabled={!enableNewOrdersButton}
        />
        <label htmlFor="showNewId">
          {enableNewOrdersButton
            ? `Zobrazit nové ${renderCount(newOrders)}`
            : 'Žádné nové'}
        </label>

        <input
          type="radio"
          name="orderRadioGroup"
          id="showConfirmedId"
          disabled={!enableConfirmedButton}
          onClick={handleShowConfirmed}
        />
        <label htmlFor="showConfirmedId">
          {enableConfirmedButton
            ? `Zobrazit potvrzené ${renderCount(confirmedOrders)}`
            : 'Žádné potvrzené'}
        </label>

        <input
          type="radio"
          name="orderRadioGroup"
          disabled={!enableAllButton}
          onClick={handleShowAll}
          id="showAllId"
        />
        <label htmlFor="showAllId">
          {enableAllButton
            ? `Zobrazit všechny ${renderCount(orders)}`
            : 'Žádné k zobrazení'}
        </label>
      </CustomerOrdersRadioGroup>

      <OrdersContainer>{renderOrderedItems()}</OrdersContainer>
    </CustomerOrdersContainer>
  );

  function handleShowNew() {
    stop();
    if (enableNewOrdersButton) {
      setShowNew(true);
      setShowConfirmed(false);
      setShowAll(false);
    } else {
      showInfoToast('Nejsou žádné nové objednávky');
    }
  }
  function handleShowConfirmed() {
    stop();
    if (enableConfirmedButton) {
      setShowNew(false);
      setShowConfirmed(true);
      setShowAll(false);
    } else {
      showInfoToast('Nejsou žádné potvrzené objednávky');
    }
  }

  function handleShowAll() {
    stop();
    if (enableAllButton) {
      setShowNew(false);
      setShowConfirmed(false);
      setShowAll(true);
    } else {
      showInfoToast('Nejsou žádné objednávky');
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

    items.sort(compare);
    return items.map((order, index) => {
      return <OrderedItem key={index} order={order} />;
    });
  }
};
function compare(a, b) {
  if (a.orderNumber > b.orderNumber) {
    return -1;
  }
  if (a.orderNumber < b.orderNumber) {
    return 1;
  }
  return 0;
}

export default CustomerOrders;
