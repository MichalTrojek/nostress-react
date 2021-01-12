import styled from 'styled-components';

const CartItem = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 0 1rem;

  .name {
    grid-row: 1 / span 1;
    grid-column: 2 / span 9;
    hyphens: auto;
  }

  .amount {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
  }
  .price {
    grid-row: 1 / span 1;
    grid-column: 12 / span 1;
    justify-self: center;
  }
`;

export default CartItem;
