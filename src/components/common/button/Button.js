import styled from 'styled-components';
import StyledButton from './StyledButton';

const Button = ({ onClick, text }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
