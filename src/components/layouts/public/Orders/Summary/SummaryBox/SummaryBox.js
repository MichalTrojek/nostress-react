import styled from 'styled-components';

import { DELIVERY } from '../../../../../../utils/constant';

import OrderedBox from './OrderBox';
import CustomerInfoBox from './CustomerInfoBox';

const SummaryBoxStyle = styled.div`
  border: 1px solid var(--color-tertiary);
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  .SummaryBox__deliveryMethod {
    grid-column: 1 / -1;
  }

  .SummaryBox__totalPrice {
    grid-column: 1 / -1;

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
      <p className="SummaryBox__deliveryMethod">
        Způsob dopravy:{' '}
        {orderMethod === DELIVERY ? 'ROZVOZ' : 'OSOBNÍ VYZVEDNUTÍ'}
      </p>
      <CustomerInfoBox name={name} email={email} phoneNumber={phoneNumber} />
      {renderOrderedItems()}
      <p className="SummaryBox__totalPrice">Cena celkem: {totalPrice},- Kč</p>
    </SummaryBoxStyle>
  );

  function renderOrderedItems() {
    return items.map((item, index) => {
      return <OrderedBox key={index} item={item} />;
    });
  }
};

export default SummaryBox;
