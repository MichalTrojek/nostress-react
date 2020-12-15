import styled from 'styled-components';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import Background from '../../common/Background';
import Wrapper from '../../common/Wrapper';
import SoupsForm from '../../layouts/private/SoupsForm';

import fetchSoups from '../../../redux/actions/soups/fetchSoups';

const SoupsPageBackground = styled(Background)`
  min-height: 100vh;
`;

const SoupsPage = ({ fetchSoups, fetchedData, soups }) => {
  useEffect(() => {
    if (!fetchedData) {
      fetchSoups();
    }
  }, [fetchSoups, fetchedData]);

  return (
    <SoupsPageBackground>
      <Wrapper>
        <h1>Tvorba polévkoho menu</h1>
        <SoupsForm soups={soups} />
      </Wrapper>
    </SoupsPageBackground>
  );
};

function mapStateToProps(state, ownProps) {
  const fetchedData = state.soups > 0;
  const soups = state.soups;
  return {
    fetchedData: fetchedData,
    soups: soups,
  };
}

export default connect(mapStateToProps, { fetchSoups })(SoupsPage);
