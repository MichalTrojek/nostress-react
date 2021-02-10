import styled from 'styled-components';
import { useState } from 'react';
import Button from '../../../../common/Button';
import { toDateTime } from '../../../../../utils/dateUtils';

const OrderHistoryItemContainer = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--color-tertiary);

  margin-bottom: 1rem;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    border-bottom-left-radius: 10px;
  }

  .OrderhistoryItem__number {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 1rem;
    font-weight: bold;
    min-width: 5%;

    background-color: var(--color-tertiary);
    color: black;

    @media only screen and (min-width: 768px) {
      border-bottom-left-radius: 7px;
    }
  }

  .OrderhistoryItem__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem;
    line-height: 2.9rem;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
    }
  }

  .OrderhistoryItem_detailButton {
    border-radius: 0;

    &:hover {
      transform: translateY(0);
    }
  }
`;

const OrderDetailContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid var(--color-tertiary);
  margin-bottom: 1rem;
  position: relative;
  .OrderDetail__number {
    position: absolute;
    right: 0;
    top: 0;
    background-color: var(--color-tertiary);
    color: black;
    font-weight: bold;
    border-bottom-left-radius: 5px;
    padding: 1rem;
  }
  .OrderDetail__info {
    padding: 1rem;
  }

  .OrderDetail__detailButton {
    border-radius: 0;
  }

  .items {
    padding: 1rem;
  }

  .items > p {
    padding-left: 2rem;
    text-indent: -1.8rem;
    padding-top: 1rem;
  }

  .information {
    padding: 1rem;
  }
`;

const OrderHistoryItem = ({ order }) => {
  const [showDetail, setShowDetail] = useState(false);

  return showDetail ? renderDetail() : renderItem();

  function renderDetail() {
    return (
      <OrderDetailContainer>
        <div className="OrderDetail__number">
          <p>{order.orderNumber}</p>
        </div>
        <div className="OrderDetail__info">
          <p>{`${order.name} ${order.surname}`}</p>
          <p>{order.email}</p>
          <p>{`Telefon: ${order.phoneNumber}`}</p>
          <p>Vytvořena: {toDateTime(order)} </p>
        </div>

        <div className="items">
          <p className="bold">Položky</p>
          {order.items.map((item, index) => {
            return (
              <p className="item" key={index}>
                {item.amount} x {item.name}
              </p>
            );
          })}
        </div>

        <div className="information">
          <p className="bold">Ostatní informace</p>
          <p>{order.text}</p>
        </div>

        <Button
          onClick={handleDetailButton}
          className="OrderDetail__detailButton"
          primary
        >
          Zavřít detail
        </Button>
      </OrderDetailContainer>
    );
  }

  function renderItem() {
    return (
      <OrderHistoryItemContainer>
        <div className="OrderhistoryItem__number">
          <p>{order.orderNumber}</p>
        </div>
        <div className="OrderhistoryItem__info">
          <p>{`${order.name} ${order.surname}`}</p>
          <p>{order.email}</p>
          {/* <p>{order.phoneNumber}</p> */}
        </div>

        <Button
          onClick={handleDetailButton}
          className="OrderhistoryItem_detailButton"
          primary
        >
          detail
        </Button>
      </OrderHistoryItemContainer>
    );
  }

  function handleDetailButton() {
    setShowDetail(!showDetail);
  }
};

export default OrderHistoryItem;
