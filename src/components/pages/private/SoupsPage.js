import styled from 'styled-components';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import Background from '../../common/Background';
import Wrapper from '../../common/Wrapper';
import SoupsForm from '../../layouts/private/SoupsForm';

import fetchData from '../../../redux/actions/data/fetchData';

import PrivateNavBar from '../../layouts/private/PrivateNavBar';

const SoupsPageBackground = styled.div`
  background-color: black;
  min-height: 100vh;
`;

const SoupsPage = ({ fetchData, soups, soupBoxPrice }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <SoupsPageBackground>
      <Wrapper>
        <PrivateNavBar />
        <h1>Tvorba polévkoho menu</h1>
        <SoupsForm soups={soups} boxPrice={soupBoxPrice} />
      </Wrapper>
    </SoupsPageBackground>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    soups: state.data.soups,
    soupBoxPrice: state.data.boxPrices.soupBoxPrice,
  };
}

export default connect(mapStateToProps, { fetchData })(SoupsPage);
