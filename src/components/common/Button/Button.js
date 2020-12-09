import StyledButton from './StyledButton';

const Button = ({ onClick, text, disabled, type }) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
