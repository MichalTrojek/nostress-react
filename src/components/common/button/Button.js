import styled from 'styled-components';

const StyledButton = styled.button`
  color: var(--color-secondary);
  background-color: var(--color-tertiary);
  padding: 1rem 2rem 1rem 2rem;
  font-weight: bold;
  border-radius: 0.3rem;
  letter-spacing: 0.3rem;
  white-space: nowrap;
  text-transform: uppercase;
  transition: transform 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:focus {
    text-decoration: none;
  }
  &:hover {
    transform: translateY(-0.2rem);
    filter: brightness(90%);
  }
  &:active {
    transform: translateY(0.2rem);
  }
`;

const Button = ({ onClick, text }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
