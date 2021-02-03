import styled from 'styled-components';
import { useState } from 'react';
import RadioGroup from '../../../common/Forms/RadioGroup';

const AllowOrderingRadioGroup = styled(RadioGroup)`
  justify-content: center;
`;

const AllowOrderingRadioGroup = () => {
  return (
    <AllowOrderingRadioGroup>
      <input
        type="radio"
        name="orderRadioGroup"
        id="showNewId"
        onClick={handleShowNew}
        disabled={!enableNewOrdersButton}
      />
      <label htmlFor="showNewId">Zakázat objednávání</label>

      <input
        type="radio"
        name="orderRadioGroup"
        id="showConfirmedId"
        disabled={!enableConfirmedButton}
        onClick={handleShowConfirmed}
      />
      <label htmlFor="showConfirmedId">Povolit objednávání</label>
    </AllowOrderingRadioGroup>
  );
};

export default AllowOrderingRadioGroup;
