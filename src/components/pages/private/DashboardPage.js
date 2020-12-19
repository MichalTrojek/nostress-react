import PageLayout from '../../PageLayout';
import styled from 'styled-components';
import PrivateNavBar from '../../layouts/private/PrivateNavBar';

import Wrapper from '../../common/Wrapper';
import Background from '../../common/Background';

const DashboardBackground = styled(Background)`
  background-color: black;
  min-height: 100vh;
`;

const DashboardPage = () => {
  return (
    <PageLayout>
      <DashboardBackground>
        <Wrapper>
          <PrivateNavBar />
        </Wrapper>
      </DashboardBackground>
    </PageLayout>
  );
};

export default DashboardPage;
