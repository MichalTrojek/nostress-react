import styled from 'styled-components';

import { DELIVERY } from '../../../../../../utils/constant';

import OrderedBox from './OrderBox';

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
      return <OrderedBox key={index} item={item} />;
    });
  }
};

export default SummaryBox;
