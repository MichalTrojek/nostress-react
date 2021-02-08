import styled from 'styled-components';
import Button from '../../../../common/Button';

const OrderHistoryItemContainer = styled.div`
  display: flex;
  padding: 2rem;
  border: 1px solid var(--color-tertiary);
  position: relative;
  border-bottom-left-radius: 10px;

  .detailButton {
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
      <p>item</p>
      <p>Číslo objednávka</p>
      <p>testě</p>
      <Button className="detailButton" primary>
        detail
      </Button>
    </OrderHistoryItemContainer>
  );
};

export default OrderHistoryItem;
