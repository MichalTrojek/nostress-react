import styled from 'styled-components';
import Button from '../Button';
import { useHistory } from 'react-router-dom';

const OrderButtonStyled = styled(Button)``;

const OrderButton = () => {
  const history = useHistory();

  return (
    <OrderButtonStyled primary onClick={handleClick}>
      Objednat
    </OrderButtonStyled>
  );

  function handleClick() {
    history.push('/order');
    window.scrollTo(0, 0);
  }
};

export default OrderButton;
