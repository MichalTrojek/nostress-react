import styled from 'styled-components';

import Button from '../../../common/Button';
import OrderedItem from '../CustomerOrders/OrderedItem';

const OrdersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;

  .buttons-show-list {
    padding-bottom: 1rem;
    display: grid;
    /* grid-template-columns: repeat(12, 1fr); */
    min-width: 100%;
    row-gap: 1rem;
    /* grid-column-gap: 1rem;
    margin-bottom: 0.5rem;
    Button:last-child {
      grid-column: 7 / 13;
    } */

    Button:first-child {
      background-color: lightgreen;
    }
  }
`;

const CustomerOrders = ({ orders }) => {
  return (
    <OrdersContainer>
      <div className="buttons-show-list">
        <Button primary> zobrazit Nové</Button>
        <Button primary>zobrazit Potvrzené</Button>
      </div>
      {orders.map((order, index) => {
        return <OrderedItem key={index} order={order} />;
      })}
    </OrdersContainer>
  );
};

export default CustomerOrders;
