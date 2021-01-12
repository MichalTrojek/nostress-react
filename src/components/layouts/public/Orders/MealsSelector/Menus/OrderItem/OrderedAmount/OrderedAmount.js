import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

import Button from '../../../../../../../common/Button';

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const OrderedAmountStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  position: absolute;
  left: 0;
  bottom: 20%;
  animation: 0.2s ${fadeInUpAnimation};
  .increment,
  .decrement {
    width: 30%;
    border-radius: 0;

    &:hover {
      transform: translateY(0);
    }
    &:active {
      transform: translateY(0);
    }
  }

  .increment {
    border-top-right-radius: 5px;
  }

  .decrement {
    border-top-left-radius: 5px;
  }

  .counter {
    font-size: 2.6rem;
    font-weight: bold;
  }
`;

const OrderedAmount = ({ increase, decrease, amount }) => {
  return (
    <OrderedAmountStyle>
      <Button className="increment" primary onClick={() => increase()}>
        +
      </Button>
      <span className="counter">{amount}</span>
      <Button className="decrement" primary onClick={() => decrease()}>
        -
      </Button>
    </OrderedAmountStyle>
  );
};

export default OrderedAmount;
