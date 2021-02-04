import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import RadioGroup from '../../../common/Forms/RadioGroup';

import setOrderingStatus from '../../../../redux/actions/data/setOrderingStatus';
const AllowOrderingContainer = styled(RadioGroup)`
  label {
    @media only screen and (min-width: 931px) {
      margin-bottom: 0;
      width: 49.8%;
    }
  }
`;

const AllowOrderingRadioGroup = ({ setOrderingStatus }) => {
  const [orderingAllowed, setOrderingAllowed] = useState(false);

  useEffect(() => {
    getOrderingStatus();
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
    setOrderingStatus(true);
  }

  function handleTurningOffOrdering() {
    setOrderingStatus(false);
    // db.collection('systemstatus').doc('ordering').update({ status: false });
  }
};

function mapStateToProps(state, ownProps) {
  return {
    orderingStatus: state.data.orderingStatus,
  };
}

export default connect(mapStateToProps, { setOrderingStatus })(
  AllowOrderingRadioGroup
);
