import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import orderMethod from '../../../../../../../redux/actions/orders/orderMethod';

import RadioGroup from '../../../../../../common/Forms/RadioGroup';

import { DELIVERY, PICKUP } from '../../../../../../../utils/constant';

const CardRadioGroupContainer = styled(RadioGroup)`
  padding-bottom: 0;
  label {
    margin-bottom: 0;
    border-radius: 0;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;

    @media only screen and (min-width: 931px) {
      width: 50%;
    }

    &:nth-child(2) {
      /* border-bottom-left-radius: 7px; */
      @media only screen and (min-width: 931px) {
        border-bottom-left-radius: 7px;
      }
    }

    &:last-child {
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
      @media only screen and (min-width: 931px) {
        border-bottom-left-radius: 0px;
      }
    }
  }
`;

const CartRadioGroup = ({ orderMethod }) => {
  const [selectedMethod, setSelectedMethod] = useState(DELIVERY);

  useEffect(() => {
    orderMethod(selectedMethod);
  }, [selectedMethod, orderMethod]);

  return (
    <CardRadioGroupContainer>
      <input
        id="deliveryId"
        type="radio"
        value={DELIVERY}
        name="deliveryGroup"
        checked={selectedMethod === DELIVERY}
        onChange={(event) => setSelectedMethod(event.target.value)}
      />
      <label htmlFor="deliveryId">Doručit na adresu</label>

      <input
        id="pickupId"
        type="radio"
        value={PICKUP}
        name="deliveryGroup"
        checked={selectedMethod === PICKUP}
        onChange={(event) => setSelectedMethod(event.target.value)}
      />
      <label htmlFor="pickupId">Vyzvednu osobně</label>
    </CardRadioGroupContainer>
  );
};

export default connect(null, { orderMethod })(CartRadioGroup);