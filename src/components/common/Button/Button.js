import styled from 'styled-components';
const Button = styled.button`
  color: ${(props) => (props.primary ? 'black' : 'white')};
  background-color: ${(props) => (props.primary ? '#f2c48c' : 'red')};
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
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 360px) {
    font-size: 1.7rem;
  }

  @media only screen and (min-width: 411px) {
    font-size: 1.9rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export default Button;
