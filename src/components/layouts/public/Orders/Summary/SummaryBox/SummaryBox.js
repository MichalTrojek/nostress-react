import styled from 'styled-components';

import { DELIVERY } from '../../../../../../utils/constant';

import OrderedBox from './OrderBox';
import CustomerInfoBox from './CustomerInfoBox';

const SummaryBoxStyle = styled.div`
  border: 1px solid var(--color-tertiary);
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  grid-row-gap: 1rem;

  .SummaryBox__totalPrice {
    color: var(--color-tertiary);
    font-weight: bold;
    justify-self: flex-end;
    /* @media only screen and (min-width: 768px) {
      padding-right: 2rem;
    }

    @media only screen and (min-width: 1024px) {
      padding-right: 4rem;
    } */
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
