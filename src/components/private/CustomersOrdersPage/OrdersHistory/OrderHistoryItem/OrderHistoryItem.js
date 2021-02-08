import styled from 'styled-components';
import Button from '../../../../common/Button';

const OrderHistoryItemContainer = styled.div`
  display: flex;
  padding: 2rem;
  border: 1px solid var(--color-tertiary);
  position: relative;
  border-bottom-left-radius: 10px;

  .OrderhistoryItem__number {
    position: absolute;
    left: 0;
    top: 0;
    padding: 0.7rem;
    height: 100%;
    border-bottom-left-radius: 7px;
    background-color: var(--color-tertiary);
    color: black;
  }

  .OrderhistoryItem_detailButton {
    top: 0;
    right: 0;
    position: absolute;
    border-radius: 0;
    height: 100%;
    &:hover {
      transform: translateY(0);
    }
  }
`;

const OrderHistoryItem = () => {
  return (
    <OrderHistoryItemContainer>
      <div className="OrderhistoryItem__number">
        <p> Objednávka číslo: 25</p>
      </div>

      {/* <p>Číslo objednávka</p>
      <p>testě</p> */}
      <Button className="OrderhistoryItem_detailButton" primary>
        detail
      </Button>
    </OrderHistoryItemContainer>
  );
};

export default OrderHistoryItem;
