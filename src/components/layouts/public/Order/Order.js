import { useState } from 'react';

import Button from '../../../common/Button';
import OrderSelector from './OrderSelector/OrderSelector';
import OrderMealPicker from './OrderMealPicker/OrderMealPicker';

const Order = ({ meals, breakfast }) => {
  const [menuType, setMenuType] = useState(true);
  return (
    <>
      <OrderSelector setMenuType={setMenuType} />
      <OrderMealPicker menu={menuType ? meals : breakfast} />
    </>
  );
};

export default Order;
