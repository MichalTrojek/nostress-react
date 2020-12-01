import styled from 'styled-components';
const StyledButton = styled.button`
  color: var(--color-secondary);
  background-color: var(--color-tertiary);
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 10px;
  letter-spacing: 0.3rem;
  white-space: nowrap;
  text-transform: uppercase;
  transition: transform 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  font-weight: bold;

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

  @media only screen and (min-width: 320px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 360px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 411px) {
    font-size: 1.6rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.9rem;
  }
`;

export default StyledButton;