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
    background-color: forestgreen;
    color: white;
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
    setShowNewOrdersButton(newOrders.length > 0 && !showNew);
    setShowConfirmedButton(confirmedOrders.length > 0 && !showConfirmed);
    setShowAllButton(
      newOrders.length > 0 && confirmedOrders.length > 0 && !showAll
    );
  }, [orders, newOrders, confirmedOrders, showNew, showConfirmed, showAll]);

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
