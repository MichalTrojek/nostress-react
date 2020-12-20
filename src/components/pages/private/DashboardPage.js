import { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import PageLayout from '../../PageLayout';
import PrivateNavBar from '../../layouts/private/PrivateNavBar';

import Wrapper from '../../common/Wrapper';
import Background from '../../common/Background';

import fetchOrders from '../../../redux/actions/orders/fetchOrders';

const DashboardBackground = styled(Background)`
  background-color: black;
  min-height: 100vh;
`;

const DashboardPage = ({ fetchOrders }) => {
  useEffect(() => {
    fetchOrders();

    // () => {
    //   this.unsubscribe();
    // };
  }, [fetchOrders]);

  return (
    <PageLayout>
      <DashboardBackground>
        <Wrapper>
          <PrivateNavBar />
          <h1>Objednávky</h1>
        </Wrapper>
      </DashboardBackground>
    </PageLayout>
  );
};

export default connect(null, { fetchOrders })(DashboardPage);
