import styled from 'styled-components';

const BurgerButton = styled.button`
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

  @media only screen and (min-width: 884px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  span {
    width: 3rem;
    height: 0.25rem;
    background: ${({ open }) =>
      open ? 'var(--color-tertiary);' : 'var(--color-primary);'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0.54rem;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  return (
    <BurgerButton open={open} onClick={() => setOpen(!open)}>
      <span />
      <span />
      <span />
    </BurgerButton>
  );
};

export default Burger;
