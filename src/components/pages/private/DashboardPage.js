import styled from 'styled-components';
import PageLayout from '../../PageLayout';
import PrivateNavBar from '../../layouts/private/PrivateNavBar';
import Wrapper from '../../common/Wrapper';
import Background from '../../common/Background';

import { useHistory } from 'react-router-dom';

import { useAuth } from '../../../contexts/AuthContext';

import Button from '../../../components/common/Button';
import { showErrorToast } from '../../../notifications/toast';

const DashboardPageBackground = styled(Background)`
  background-color: black;
  min-height: 100vh;
`;

const DashBoardButtons = styled.nav`
  padding-top: 10rem;
  display: grid;
  grid-row-gap: 3rem;
  justify-content: center;

  @media only screen and (min-width: 1262px) {
    display: none;
  }

  Button {
    padding: 3rem;
  }
`;

const DashboardPage = () => {
  const history = useHistory();
  const { logout } = useAuth();
  return (
    <PageLayout>
      <DashboardPageBackground>
        <Wrapper>
          <PrivateNavBar />
          <DashBoardButtons>
            <Button primary onClick={() => history.push('/dashboard/orders')}>
              Objednávky
            </Button>
            <Button primary onClick={() => history.push('/dashboard/soups')}>
              Otevíraci doba
            </Button>
            <Button primary onClick={() => history.push('/dashboard/news')}>
              editovat novinky
            </Button>
            <Button primary onClick={() => history.push('/dashboard/news')}>
              editovat karty
            </Button>
            <Button primary onClick={() => history.push('/dashboard/meals')}>
              editovat jídla
            </Button>
            <Button primary onClick={() => history.push('/dashboard/soups')}>
              editovat polévky
            </Button>

            <Button primary onClick={handleLogOut}>
              Odhlasit se
            </Button>
          </DashBoardButtons>
        </Wrapper>
      </DashboardPageBackground>
    </PageLayout>
  );

  async function handleLogOut() {
    try {
      await logout();
      history.push('/login');
    } catch {
      showErrorToast('Odhlášení se nezdařilo');
    }
  }
};

export default DashboardPage;
