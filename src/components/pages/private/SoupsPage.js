import styled from 'styled-components';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import Background from '../../common/Background';
import Wrapper from '../../common/Wrapper';
import SoupsForm from '../../layouts/private/SoupsForm';

import fetchData from '../../../redux/actions/data/fetchData';

import PrivateNavBar from '../../layouts/private/PrivateNavBar';

const SoupsPageBackground = styled(Background)`
  min-height: 100vh;
`;

const SoupsPage = ({ fetchData, soups }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <SoupsPageBackground>
      <Wrapper>
        <PrivateNavBar />
        <h1>Tvorba polévkoho menu</h1>
        <SoupsForm soups={soups} />
      </Wrapper>
    </SoupsPageBackground>
  );
};

function mapStateToProps(state, ownProps) {
  const soups = state.data.soups;
  return {
    soups: soups,
  };
}

export default connect(mapStateToProps, { fetchData })(SoupsPage);
