import styled from 'styled-components';
import PageLayout from '../../PageLayout';
import PrivateNavBar from '../../layouts/private/PrivateNavBar';
import Wrapper from '../../common/Wrapper';
import Background from '../../common/Background';

const DashboardPageBackground = styled(Background)`
  background-color: black;
  min-height: 100vh;
`;

const DashboardPage = () => {
  return (
    <PageLayout>
      <DashboardPageBackground>
        <Wrapper>
          <PrivateNavBar />
        </Wrapper>
      </DashboardPageBackground>
    </PageLayout>
  );
};

export default DashboardPage;
