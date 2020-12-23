import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Button from '../../../../common/Button';

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
    background-color: var(--color-quaternary);
    color: white;
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
    <OrderedItemContainer>
      <div className="header">
        <p className="orderNumber">Objednávka číslo {order.orderNumber}</p>
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

  function handleRemoveButton() {}

  function renderOrderMethod(method) {
    const text = method === 'PICKUP' ? 'Výdejní okenko' : 'Rozvoz';
    return <p className="bold">{text}</p>;
  }

  function renderButton() {
    return orderConfirmed ? (
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
  }
};

export default OrderedItem;
