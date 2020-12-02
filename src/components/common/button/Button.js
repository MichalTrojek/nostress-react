import styled from 'styled-components';
import StyledButton from './StyledButton';

const Button = ({ onClick, text, disabled }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
