import styled from 'styled-components';
import { useState } from 'react';
import Button from '../../../../common/Button';
import { db } from '../../../../../firebase';
import { sendOrderConfirmedEmail } from '../../../../../utils/emailUtils';
import { toDateTime } from '../../../../../utils/dateUtils';

import Modal from '../../../../common/Modal';
import { CSSTransition } from 'react-transition-group';
import './OrderedItem.css';

import {
  showErrorToast,
  showInfoToast,
  showSuccessToast,
} from '../../../../../notifications/toast';

const OrderedItemContainer = styled.div`
  border: 1px solid var(--color-tertiary);
  padding: 1rem;
  display: grid;
  grid-row-gap: 1rem;
  grid-template-rows: max-content 1fr;

  margin: 0.2rem;
  position: relative;
  border-radius: 10px;
  border-top-right-radius: 0;

  .header {
    color: var(--color-tertiary);
  }

  .bold {
    font-weight: bold;
  }

  .items > p {
    padding-left: 1.5rem;
    text-indent: -1.8rem;
  }

  .orderNumber {
    position: absolute;
    top: -0.5px;
    right: -0.5px;
    padding: 0 1rem 0 1rem;
    background-color: ${(props) =>
      props.isConfirmed ? 'transparent' : '#2C5E1A'};
    color: white;
    font-weight: bold;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 0;

    border-top: 1.2px solid var(--color-tertiary);
    border-right: 1.3px solid var(--color-tertiary);
    border-left: 2px solid var(--color-tertiary);
    border-bottom: 1.5px solid var(--color-tertiary);
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

    .confirmButton {
    }
  }
`;

const OrderedItem = ({ order }) => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <CSSTransition
      key={`order-${order.Number}`}
      timeout={10000}
      classNames="item-"
    >
      <OrderedItemContainer isConfirmed={order.isConfirmed}>
        <div className="header">
          <p className="orderNumber">
            {!order.isConfirmed
              ? 'Nová objednávka číslo '
              : 'Potvrzená objednávka číslo '}
            {order.orderNumber}
          </p>
          {renderOrderMethod(order.orderMethod)}

          <p>Vytvořena: {toDateTime(order)} </p>
          <p>
            {order.name} ({order.email}, {order.phoneNumber})
          </p>
        </div>
        <div className="items">
          <p className="bold">Položky</p>
          {order.items.map((item, index) => {
            return (
              <p key={index}>
                {item.amount} x {item.name}
              </p>
            );
          })}
        </div>
        <div className="information">
          <p className="bold">Ostatní informace</p>
          <p>{order.text}</p>
        </div>
        <div className="buttons">
          {renderButton()}
          <Button onClick={() => setShowModal(true)}>Smazat</Button>
        </div>
        <Modal
          text={`Potvrďte vymazání objednávky číslo: ${order.orderNumber}`}
          confirm={removeOrder}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </OrderedItemContainer>
    </CSSTransition>
  );

  function removeOrder() {
    const success = db
      .collection('orders')
      .doc(order.id)
      .delete()
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
      <Button primary className="confirmButton" onClick={handleConfirmButton}>
        Potvrdit
      </Button>
    );
  }

  function handleFinishedButton() {
    order.isFinished = true;
    const batch = db.batch();
    batch.set(db.collection('orderHistory').doc(order.id), order);
    batch.delete(db.collection('orders').doc(order.id));
    batch
      .commit()
      .then(() => {
        showInfoToast(
          `Objednávka číslo ${order.orderNumber} byla uložena do historie objednávek`
        );
      })
      .catch((error) => {
        console.log(`Error while finishing order: ${error}`);
      });
  }

  function handleConfirmButton() {
    setOrderConfirmed(!orderConfirmed);
    order.isConfirmed = true;
    db.collection('orders').doc(order.id).update(order);
    sendOrderConfirmedEmail(order.email, order);
    showSuccessToast(`Objednávka číslo ${order.orderNumber} byla potvrzena.`);
  }
};

export default OrderedItem;
