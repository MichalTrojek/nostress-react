import styled from 'styled-components';
import { useState, useEffect } from 'react';

import Button from '../../../common/Button';
import OrderedItem from '../CustomerOrders/OrderedItem';

const ShowButtons = styled.div`
  padding-top: 1rem;
  display: grid;
  /* grid-template-columns: repeat(12, 1fr); */
  /* min-width: 100%; */
  row-gap: 1rem;
  /* grid-column-gap: 1rem;
    margin-bottom: 0.5rem;
    Button:last-child {
      grid-column: 7 / 13;
    } */

  .showNewButton {
    background-color: lightgreen;
    display: ${(props) => (props.showNewsOrders ? 'block' : 'none')};
    opacity: ${(props) => (props.showNewsOrders ? '1' : '0')};
  }

  .showConfirmedButton {
    display: ${(props) => (props.showConfirmed ? 'block' : 'none')};
    opacity: ${(props) => (props.showConfirmed ? '1' : '0')};
  }
  .showAllButton {
    display: ${(props) => (props.showAll ? 'block' : 'none')};
    opacity: ${(props) => (props.showAll ? '1' : '0')};
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
  const [showNewOrdersButton, setShowNewOrdersButton] = useState(false);
  const [showConfirmedButton, setShowConfirmedButton] = useState(false);
  const [showAllButton, setShowAllButton] = useState(false);

  const [showAll, setShowAll] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirmed, setShowConfirmed] = useState(false);

  useEffect(() => {
    // console.log('new', newOrders);
    // console.log('confirmed', confirmedOrders);
    // console.log('all', orders);
    setShowNewOrdersButton(newOrders.length > 0);
    setShowConfirmedButton(confirmedOrders.length > 0);
    setShowAllButton(newOrders.length > 0 && confirmedOrders.length > 0);
  }, [orders, newOrders, confirmedOrders]);

  return (
    <>
      <ShowButtons
        showNewsOrders={showNewOrdersButton}
        showConfirmed={showConfirmedButton}
        showAll={showAllButton}
      >
        <Button
          primary
          className="showNewButton"
          onClick={() => setShowNew(true)}
        >
          zobrazit Nové {renderCount(newOrders)}
        </Button>
        <Button
          primary
          className="showConfirmedButton"
          onClick={() => setShowConfirmed(true)}
        >
          zobrazit Potvrzené {renderCount(confirmedOrders)}
        </Button>
        <Button
          primary
          className="showAllButton"
          onClick={() => setShowAll(true)}
        >
          zobrazit všechny {renderCount(orders)}
        </Button>
      </ShowButtons>
      <OrdersContainer>{renderOrderedItems()}</OrdersContainer>
    </>
  );

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
