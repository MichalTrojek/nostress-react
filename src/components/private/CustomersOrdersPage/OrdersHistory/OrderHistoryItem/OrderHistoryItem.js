import styled from 'styled-components';
import Button from '../../../../common/Button';

const OrderHistoryItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  /* padding: 2rem; */

  border: 1px solid var(--color-tertiary);
  position: relative;
  border-bottom-left-radius: 10px;

  .OrderhistoryItem__number {
    /* position: absolute; */
    /* left: 0; */
    /* top: 0; */
    padding: 1rem;

    border-bottom-left-radius: 7px;
    background-color: var(--color-tertiary);
    color: black;
  }

  .OrderhistoryItem__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .OrderhistoryItem_detailButton {
    /* top: 0; */
    /* right: 0; */
    /* position: absolute; */
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
        <p> Objednávka číslo: 25</p>
      </div>
      <div className="OrderhistoryItem__info">
        <p>Michal Trojek</p>
        <p>MichalTrojek1@gmail.com</p>
      </div>

      <Button className="OrderhistoryItem_detailButton" primary>
        detail
      </Button>
    </OrderHistoryItemContainer>
  );
};

export default OrderHistoryItem;
