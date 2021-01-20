import styled from 'styled-components';
import PrivateNavBar from '../common/PrivateNavBar';
import TextForm from './TextsForm';

import { useEffect } from 'react';
import { connect } from 'react-redux';

import Wrapper from '../common/Wrapper';

import fetchData from '../../redux/actions/data/fetchData';

const TextPageBackground = styled.div`
  min-height: 100vh;
  background-color: black;
`;

const TextPage = ({ texts }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <TextPageBackground>
      <Wrapper>
        <PrivateNavBar />
        <h1>Editace textů</h1>
        <TextForm texts={texts} />
      </Wrapper>
    </TextPageBackground>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    texts: state.data.texts,
  };
}

export default connect(mapStateToProps, { fetchData })(TextPage);
