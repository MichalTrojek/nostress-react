import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import selectForm from '../../../../../../redux/actions/orders/selectForm';

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

const CartRadioGroup = ({ selectForm }) => {
  const [selectedForm, setSelectedForm] = useState(DELIVERY);

  useEffect(() => {
    selectForm(selectedForm);
  }, [selectedForm, selectForm]);

  return (
    <CartRadioGroupContainer>
      <label>
        <input
          type="radio"
          value={DELIVERY}
          name="deliveryGroup"
          checked={selectedForm === DELIVERY}
          onChange={(event) => setSelectedForm(event.target.value)}
        />
        Doručit na adresu
      </label>

      <label>
        <input
          type="radio"
          value={PICKUP}
          name="deliveryGroup"
          checked={selectedForm === PICKUP}
          onChange={(event) => setSelectedForm(event.target.value)}
        />
        Vyzvednu osobně
      </label>
    </CartRadioGroupContainer>
  );
};

export default connect(null, { selectForm })(CartRadioGroup);
