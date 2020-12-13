import { useState } from 'react';

import Button from '../../../common/Button';
import OrderSelector from './OrderSelector/OrderSelector';
import OrderMealPicker from './OrderMealPicker/OrderMealPicker';

const Order = () => {
  return (
    <>
      <OrderSelector />
      <OrderMealPicker />
    </>
  );
};

export default Order;
