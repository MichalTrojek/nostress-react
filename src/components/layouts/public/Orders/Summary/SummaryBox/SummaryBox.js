import styled from 'styled-components';

import { DELIVERY } from '../../../../../../utils/constant';

import OrderedBox from './OrderBox';
import CustomerInfoBox from './CustomerInfoBox';

import CartRadioGroup from '../../MealsSelector/Cart/CartRadioGroup';

const SummaryBoxStyle = styled.div`
  border: 1px solid var(--color-tertiary);
  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom: none;

  @media only screen and (min-width: 768px) {
    padding: 2rem;
  }

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
    <>
      <SummaryBoxStyle>
        <p className="SummaryBox__deliveryMethod">
          Způsob dopravy:{' '}
          {orderMethod === DELIVERY ? 'ROZVOZ' : 'OSOBNÍ VYZVEDNUTÍ'}
        </p>
        <CustomerInfoBox name={name} email={email} phoneNumber={phoneNumber} />
        {renderOrderedItems()}
        {orderMethod === DELIVERY ?? renderContainerPrices()}
        <p className="SummaryBox__totalPrice">Cena celkem: {totalPrice},- Kč</p>
      </SummaryBoxStyle>
      <CartRadioGroup />
    </>
  );

  function renderOrderedItems() {
    return items.map((item, index) => {
      return <OrderedBox key={index} item={item} />;
    });
  }

  function renderContainerPrices() {
    console.log('lol');
    return <p>Obaly</p>;
  }
};

export default SummaryBox;
