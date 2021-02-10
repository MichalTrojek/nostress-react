import styled from 'styled-components';
import Button from '../../../../common/Button';

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

const OrderHistoryItem = ({ order }) => {
  return (
    <OrderHistoryItemContainer>
      <div className="OrderhistoryItem__number">
        <p>{order.orderNumber}</p>
      </div>
      <div className="OrderhistoryItem__info">
        <p>{`${order.name} ${order.surname}`}</p>
        <p>{order.email}</p>
        <p>{order.phoneNumber}</p>
      </div>

      <Button className="OrderhistoryItem_detailButton" primary>
        detail
      </Button>
    </OrderHistoryItemContainer>
  );
};

export default OrderHistoryItem;
