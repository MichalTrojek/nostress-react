import styled from 'styled-components';

import { DELIVERY } from '../../../../../../utils/constant';

const SummaryBoxStyle = styled.div`
  border: 1px solid var(--color-tertiary);
  padding: 1rem;
  display: grid;
  grid-row-gap: 1rem;

  .totalPrice {
    color: var(--color-tertiary);
    font-weight: bold;
    justify-self: flex-end;
  }
`;

const OrderedBox = styled.div`
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

const SummaryBox = ({
  name,
  email,
  phoneNumber,
  totalPrice,
  orderMethod,
  items,
}) => {
  return (
    <SummaryBoxStyle>
      <p>
        Způsob dopravy:{' '}
        {orderMethod === DELIVERY ? 'ROZVOZ' : 'OSOBNÍ VYZVEDNUTÍ'}
      </p>
      <p>Jmeno: {name}</p>
      <p>Email: {email}</p>
      <p>Telefon: {phoneNumber}</p>
      {renderOrderedItems()}
      <p className="totalPrice">Cena celkem: {totalPrice},-</p>
    </SummaryBoxStyle>
  );
  function renderOrderedItems() {
    return items.map((item, index) => {
      return (
        <OrderedBox key={index}>
          <p className="name">{item.name}</p>
          <p className="amount">{item.amount} x </p>
          <p className="price">{item.price},-</p>
        </OrderedBox>
      );
    });
  }
};

export default SummaryBox;
