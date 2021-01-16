import styled from 'styled-components';

const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding: 1rem;

  .sum {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .totalPrice {
      font-weight: bold;
      color: var(--color-tertiary);
    }

    .boxesPrice {
      font-size: 1.6rem;
      padding-left: 1rem;
    }
  }
`;

export default CartFooter;
