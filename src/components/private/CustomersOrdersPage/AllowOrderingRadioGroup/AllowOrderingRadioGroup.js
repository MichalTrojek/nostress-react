import styled from 'styled-components';
import { useState } from 'react';
import RadioGroup from '../../../common/Forms/RadioGroup';

const AllowOrderingContainer = styled(RadioGroup)`
  label {
    @media only screen and (min-width: 931px) {
      margin-bottom: 0;
      width: 49.8%;
    }
  }
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
      <label htmlFor="turnOffOrdering">Zakázat objednávání</label>

      <input
        type="radio"
        name="allowOrdering"
        id="turnOnOrdering"
        // onClick={handleShowConfirmed}
      />
      <label htmlFor="turnOnOrdering">Povolit objednávání</label>
    </AllowOrderingContainer>
  );
};

export default AllowOrderingRadioGroup;
