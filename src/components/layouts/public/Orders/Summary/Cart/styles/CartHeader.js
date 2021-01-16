import styled from 'styled-components';
const CartHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 0.2rem 1rem;
  border-bottom: 1px solid var(--color-tertiary);

  .cart-header__name {
    grid-row: 1 / span 1;
    grid-column: 2 / span 10;
  }

  .cart-header__amount {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
  }

  .cart-header__price {
    grid-row: 1 / span 1;
    grid-column: 12 / span 1;
  }
`;

export default CartHeader;
