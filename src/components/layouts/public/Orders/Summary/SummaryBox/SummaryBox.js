import styled from 'styled-components';
import { useState, useEffect } from 'react';

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

  .SummaryBox__containers {
    grid-column: 1 / -1;
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
  const [mealsCount, setMealsCount] = useState(0);
  const [soupsCount, setSoupsCount] = useState(0);

  const SOUP_BOX_PRICE = 5;
  const MEAL_BOX_PRICE = 7;

  useEffect(() => {
    let tempSoupsCount = 0;
    let tempMealsCount = 0;

    items.forEach((item) => {
      if (item.isSoup) {
        tempSoupsCount++;
      } else {
        tempMealsCount++;
      }
    });
    setSoupsCount(tempSoupsCount);
    setMealsCount(tempMealsCount);
  }, [items]);

  return (
    <>
      <SummaryBoxStyle>
        <p className="SummaryBox__deliveryMethod">
          Způsob dopravy:{' '}
          {orderMethod === DELIVERY ? 'ROZVOZ' : 'OSOBNÍ VYZVEDNUTÍ'}
        </p>
        <CustomerInfoBox name={name} email={email} phoneNumber={phoneNumber} />
        {renderOrderedItems()}
        {orderMethod === DELIVERY ? renderContainerPrices() : <></>}
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
    return (
      <div className="SummaryBox__containers">
        <p>Obaly</p>
        <p>{mealsCount} x Krabička na jídlo</p>
        <p>Polívky: {soupsCount} x Obal na polévku</p>
      </div>
    );
  }
};

export default SummaryBox;
