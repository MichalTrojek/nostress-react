import styled from 'styled-components';
import Button from '../Button';
import { useHistory } from 'react-router-dom';

const BreakfastOrderButtonStyled = styled(Button)``;

const BreakfastOrderButton = () => {
  const history = useHistory();

  return (
    <BreakfastOrderButtonStyled primary onClick={handleClick}>
      Objednat Snídani
    </BreakfastOrderButtonStyled>
  );

  function handleClick() {
    history.push('/breakfastOrder');
    window.scrollTo(0, 0);
  }
};

export default BreakfastOrderButton;
