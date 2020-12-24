import styled from 'styled-components';
import { useState } from 'react';
import Button from '../../../../common/Button';
import { db } from '../../../../../firebase';
import {
  showErrorToast,
  showInfoToast,
} from '../../../../../notifications/toast';

const OrderedItemContainer = styled.div`
  border: 1px solid var(--color-tertiary);
  padding: 1rem;
  display: grid;
  grid-row-gap: 1rem;
  grid-template-rows: max-content 1fr;
  min-width: 100%;
  margin: 0.2rem;
  position: relative;

  @media only screen and (min-width: 1024px) {
    --width: calc((99% / 2));
    max-width: var(--width);
    min-width: var(--width);
  }

  ul {
    list-style-type: none;
    li {
      padding-left: 1rem;
    }
  }
  .header {
    color: var(--color-tertiary);
  }

  .bold {
    font-weight: bold;
  }

  .items {
  }

  .orderNumber {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1rem 0 1rem;
    background-color: ${(props) =>
      props.isConfirmed ? '#6f6150' : 'forestgreen'};
    color: white;
    font-weight: bold;
    border-bottom-left-radius: 5px;
  }

  .information {
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
    Button {
      min-width: calc((100% / 2));
    }
    Button:first-child {
      margin-right: 0.2rem;
    }

    Button:last-child {
      margin-left: 0.2rem;
    }
  }
`;

const OrderedItem = ({ order }) => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  return (
    <OrderedItemContainer isConfirmed={order.isNew}>
      <div className="header">
        <p className="orderNumber">
          {order.isNew ? 'Nová objednávka číslo' : 'Potvrzená objednávka číslo'}{' '}
          {order.orderNumber}
        </p>
        {renderOrderMethod(order.orderMethod)}
        <p>
          {order.name} ({order.email}, {order.phoneNumber})
        </p>
      </div>
      <div className="items">
        <p className="bold">Položky</p>
        <ul>
          {order.items.map((item, index) => {
            return (
              <li key={index}>
                <p>
                  {item.amount} x {item.name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="information">
        <p className="bold">Ostatní informace</p>
        <p>{order.text}</p>
      </div>
      <div className="buttons">
        {renderButton()}
        <Button onClick={handleRemoveButton}>Smazat</Button>
      </div>
    </OrderedItemContainer>
  );

  function handleRemoveButton() {
    const success = db
      .collection('orders')
      .doc(order.id)
      .delete()
      .then()
      .then(() => {
        console.log(`Document with id ${order.id} was successfully deleted!`);
        return true;
      })
      .catch((error) => {
        console.log(
          `Error removing document with id ${order.id}. Error: ${error}`
        );
        return false;
      });
    showToast(success);
  }

  function showToast(success) {
    success
      ? showInfoToast('Objednávka byla vymazána')
      : showErrorToast('Objednvku se nepodařilo vymazat');
  }

  function renderOrderMethod(method) {
    const text = method === 'PICKUP' ? 'Výdejní okenko' : 'Rozvoz';
    return <p className="bold">{text}</p>;
  }

  function renderButton() {
    return order.isConfirmed ? (
      <Button primary onClick={handleFinishedButton}>
        Hotovo
      </Button>
    ) : (
      <Button primary onClick={handleConfirmButton}>
        Potvrdit
      </Button>
    );
  }

  function handleFinishedButton() {}

  function handleConfirmButton() {
    setOrderConfirmed(!orderConfirmed);
    order.isConfirmed = true;
    db.collection('orders').doc(order.id).update(order);
  }
};

export default OrderedItem;
