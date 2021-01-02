import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import orderMethod from '../../../../../../redux/actions/orders/orderMethod';

import RadioGroup from '../../../../../common/Forms/RadioGroup';

import { DELIVERY, PICKUP } from '../../../../../../utils/constant';

const CartRadioGroupContainer = styled(RadioGroup)`
  display: flex;
  border-top: solid 1px var(--color-tertiary);
  padding: 0.2rem 0;
  label {
    margin-left: 1rem;
  }
`;

const CartRadioGroup = ({ orderMethod }) => {
  const [selectedMethod, setSelectedMethod] = useState(DELIVERY);

  useEffect(() => {
    orderMethod(selectedMethod);
  }, [selectedMethod, orderMethod]);

  return (
    <CartRadioGroupContainer>
      <label>
        <input
          type="radio"
          value={DELIVERY}
          name="deliveryGroup"
          checked={selectedMethod === DELIVERY}
          onChange={(event) => setSelectedMethod(event.target.value)}
        />
        Doručit na adresu
      </label>

      <label>
        <input
          type="radio"
          value={PICKUP}
          name="deliveryGroup"
          checked={selectedMethod === PICKUP}
          onChange={(event) => setSelectedMethod(event.target.value)}
        />
        Vyzvednu osobně
      </label>
    </CartRadioGroupContainer>
  );
};

export default connect(null, { orderMethod })(CartRadioGroup);
