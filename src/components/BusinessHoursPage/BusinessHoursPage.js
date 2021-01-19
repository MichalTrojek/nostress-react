import styled from 'styled-components';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import Wrapper from '../common/Wrapper';

import BussinessHoursForm from './BusinessHoursForm';
import fetchData from '../../redux/actions/data/fetchData';
import PrivateNavBar from '../common/PrivateNavBar';

const SoupsPageBackground = styled.div`
  background-color: black;
  min-height: 100vh;
`;

const BusinessHoursPage = ({ fetchData, hours }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <SoupsPageBackground>
      <Wrapper>
        <PrivateNavBar />
        <h1>Editace Otevírací doby</h1>
        <BussinessHoursForm hours={hours} />
      </Wrapper>
    </SoupsPageBackground>
  );
};

function mapStateToProps(state, ownProps) {
  const hours = state.data.hours;
  return {
    hours: hours,
  };
}

export default connect(mapStateToProps, { fetchData })(BusinessHoursPage);
