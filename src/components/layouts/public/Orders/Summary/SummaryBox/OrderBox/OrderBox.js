import styled from 'styled-components';

const OrderedBoxStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: max-content;

  .amount {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  .name {
    grid-column: 2 / 11;
    grid-row: 1 / span 1;
    hyphens: auto;
  }

  .price {
    grid-column: 12/ -1;
    grid-row: 1 / span 1;
    color: var(--color-tertiary);
  }
`;

const OrderedBox = ({ item }) => {
  return (
    <OrderedBoxStyle>
      <p className="name">{item.name}</p>
      <p className="amount">{item.amount} x </p>
      <p className="price">{item.price},-</p>
    </OrderedBoxStyle>
  );
};

export default OrderedBox;
