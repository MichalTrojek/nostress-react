import styled from 'styled-components';
import Button from '../../../../common/Button';

const OrderHistoryItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--color-tertiary);
  border-bottom-left-radius: 10px;

  .OrderhistoryItem__number {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem;
    border-bottom-left-radius: 7px;
    background-color: var(--color-tertiary);
    color: black;

    p:nth-child(2) {
      margin-top: 1.5rem;
    }
  }

  .OrderhistoryItem__info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 1rem 0;
    line-height: 2.9rem;
  }

  .OrderhistoryItem_detailButton {
    border-radius: 0;

    &:hover {
      transform: translateY(0);
    }
  }
`;

const OrderHistoryItem = () => {
  return (
    <OrderHistoryItemContainer>
      <div className="OrderhistoryItem__number">
        <p> Číslo objednávky</p>
        <p> 548</p>
      </div>
      <div className="OrderhistoryItem__info">
        <p>Michal Trojek</p>
        <p>MichalTrojek1@gmail.com</p>
        <p>605 244 847</p>
      </div>

      <Button className="OrderhistoryItem_detailButton" primary>
        detail
      </Button>
    </OrderHistoryItemContainer>
  );
};

export default OrderHistoryItem;
