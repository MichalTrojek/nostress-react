import styled from 'styled-components';

const Burger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  span {
    width: 3rem;
    height: 0.3rem;
    background: ${({ open }) =>
      open ? 'var(--color-tertiary);' : 'var(--color-primary);'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0.5rem;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      margin: 0.1rem 0;
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export default Burger;
