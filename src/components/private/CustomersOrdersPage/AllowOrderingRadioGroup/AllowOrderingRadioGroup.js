import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { db } from '../../../../firebase';
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
  const [orderingAllowed, setOrderingAllowed] = useState(false);

  useEffect(() => {
    // console.log(db.collection('systemstatus').doc('ordering'));
    // setOrderingAllowed()
  }, [setOrderingAllowed]);

  return (
    <AllowOrderingContainer>
      <input
        type="radio"
        name="allowOrdering"
        id="turnOffOrdering"
        onClick={handleTurningOffOrdering}
      />
      <label htmlFor="turnOffOrdering">Zakázat objednávání</label>

      <input
        type="radio"
        name="allowOrdering"
        id="turnOnOrdering"
        onClick={handleTurningOnOrdering}
      />
      <label htmlFor="turnOnOrdering">Povolit objednávání</label>
    </AllowOrderingContainer>
  );

  function handleTurningOnOrdering() {
    db.collection('systemstatus').doc('ordering').update({ status: true });
  }

  function handleTurningOffOrdering() {
    db.collection('systemstatus').doc('ordering').update({ status: false });
  }
};

export default AllowOrderingRadioGroup;
