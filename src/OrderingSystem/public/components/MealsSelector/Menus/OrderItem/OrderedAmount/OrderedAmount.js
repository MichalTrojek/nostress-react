import styled, { keyframes } from 'styled-components';
import { fadeInDown, fadeInLeft, fadeInRight } from 'react-animations';

import Button from '../../../../../../../components/common/Button';

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;

const OrderedAmountStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;

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
    animation: 0.2s ${fadeInLeftAnimation};
    border-top-right-radius: 5px;
  }

  .decrement {
    animation: 0.2s ${fadeInRightAnimation};
    border-top-left-radius: 5px;
  }

  .counter {
    animation: 0.2s ${fadeInDownAnimation};
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
