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
  newsOrders = [],
  confirmedOrders = [],
}) => {
  const [showNewsOrders, setShowNewsOrders] = useState(true);
  const [showConfirmed, setShowConfirmed] = useState(true);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log(orders);
    console.log(newsOrders);
    console.log(confirmedOrders);
    setShowNewsOrders(newsOrders.length > 0);
    setShowConfirmed(confirmedOrders.length > 0);
    setShowAll(orders.length > 0);
  }, [orders, newsOrders, confirmedOrders]);

  return (
    <>
      <ShowButtons
        showNewsOrders={showNewsOrders}
        showConfirmed={showConfirmed}
        showAll={showAll}
      >
        <Button primary className="showNewButton">
          zobrazit Nové
        </Button>
        <Button primary className="showConfirmedButton">
          zobrazit Potvrzené
        </Button>
        <Button primary className="showAllButton">
          zobrazit všechny
        </Button>
      </ShowButtons>
      <OrdersContainer>
        {orders.map((order, index) => {
          return <OrderedItem key={index} order={order} />;
        })}
      </OrdersContainer>
    </>
  );
};

export default CustomerOrders;
