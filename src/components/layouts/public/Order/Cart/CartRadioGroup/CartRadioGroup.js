import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import selectForm from '../../../../../../redux/actions/orders/selectForm';

import RadioGroup from '../../../../../common/Forms/RadioGroup';

import Button from '../../../../../common/Button';

const CartRadioGroupContainer = styled(RadioGroup)`
  display: flex;
  border-top: solid 1px var(--color-tertiary);
  padding: 0.2rem 0;

  /* Button {
    font-size: 1.2rem;
  } */
`;

const CartRadioGroup = ({ selectForm }) => {
  const DELIVERY_FORM = 'DELIVERY_FORM';
  const PICKUP_FORM = 'PICKUP_FORM';
  const [selectedForm, setSelectedForm] = useState(DELIVERY_FORM);

  useEffect(() => {
    selectForm(selectedForm);
  }, [selectedForm, selectForm]);

  return (
    <CartRadioGroupContainer>
      <label>
        <input
          type="radio"
          value={DELIVERY_FORM}
          name="deliveryGroup"
          checked={selectedForm === DELIVERY_FORM}
          onChange={(event) => setSelectedForm(event.target.value)}
        />
        Vyzvednu osobně
      </label>

      <label>
        <input
          type="radio"
          value={PICKUP_FORM}
          name="deliveryGroup"
          checked={selectedForm === PICKUP_FORM}
          onChange={(event) => setSelectedForm(event.target.value)}
        />
        Doručit na adresu
      </label>
      {/* <Button primary>Pokračovat k objednávce</Button> */}
    </CartRadioGroupContainer>
  );
};

export default connect(null, { selectForm })(CartRadioGroup);
