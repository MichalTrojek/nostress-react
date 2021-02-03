import styled from 'styled-components';
import { useState } from 'react';
import RadioGroup from '../../../common/Forms/RadioGroup';

const AllowOrderingContainer = styled(RadioGroup)`
  /* justify-content: center; */
`;

const AllowOrderingRadioGroup = () => {
  return (
    <AllowOrderingContainer>
      <input
        type="radio"
        name="allowOrdering"
        id="turnOffOrdering"
        // onClick={handleShowNew}
      />
      <label htmlFor="showNewId">Zakázat objednávání</label>

      <input
        type="radio"
        name="allowOrdering"
        id="turnOnOrdering"
        // onClick={handleShowConfirmed}
      />
      <label htmlFor="showConfirmedId">Povolit objednávání</label>
    </AllowOrderingContainer>
  );
};

export default AllowOrderingRadioGroup;
