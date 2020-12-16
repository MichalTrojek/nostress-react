import styled from 'styled-components';

const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1rem;

  .totalPrice {
    font-weight: bold;
    color: var(--color-tertiary);
  }
`;

export default CartFooter;
