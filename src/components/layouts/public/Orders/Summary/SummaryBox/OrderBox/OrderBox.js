import styled from 'styled-components';

const OrderedBoxStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: max-content;

  .OrderedBox__amount {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  .OrderedBox__name {
    grid-column: 2 / 11;
    grid-row: 1 / span 1;
    hyphens: auto;
  }

  .OrderedBox__price {
    grid-column: 12/ -1;
    grid-row: 1 / span 1;
    color: var(--color-tertiary);
  }
`;

const OrderedBox = ({ item }) => {
  return (
    <OrderedBoxStyle>
      <p className="OrderedBox__name">{item.name}</p>
      <p className="OrderedBox__amount">{item.amount} x </p>
      <p className="OrderedBox__price">{item.price},-</p>
    </OrderedBoxStyle>
  );
};

export default OrderedBox;
