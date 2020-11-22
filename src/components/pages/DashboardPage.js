import React, { useState } from 'react';
import PageLayout from '../common/PageLayout';
import Button from '../common/button/Button';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import NewsEditor from '../common/editors/NewsEditor';
import styled from 'styled-components';

const DashboardBackground = styled.section`
  background-color: black;
  height: 100vh;
  padding: 1rem;
`;

const DashboardWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const DashboardPage = () => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('failed to logout');
    }
  }

  return (
    <PageLayout>
      <DashboardBackground>
        <DashboardWrapper>
          <Button onClick={handleLogOut} text="Odhlasit se" />
          <NewsEditor />
        </DashboardWrapper>
      </DashboardBackground>
    </PageLayout>
  );
};

export default DashboardPage;
