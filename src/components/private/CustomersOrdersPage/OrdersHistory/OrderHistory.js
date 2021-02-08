import styled from 'styled-components';
import Background from '../../../common/Background';
import Wrapper from '../../../common/Wrapper';
import OrderHistoryItem from './OrderHistoryItem';

const OrderHistoryItemsList = styled.div`
  /* display: flex;
  flex-wrap: auto; */
`;

const OrderHistory = () => {
  return (
    <Background>
      <Wrapper>
        <OrderHistoryItemsList>
          <OrderHistoryItem />
        </OrderHistoryItemsList>
      </Wrapper>
    </Background>
  );
};

export default OrderHistory;
