import React, { useState } from 'react';
import PageLayout from '../PageLayout';
import Button from '../common/Button';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const DashboardBackground = styled.section`
  background-color: black;
  padding: 1rem;
`;

const DashboardWrapper = styled.div`
  max-width: var(--max-width);
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 40rem;

  Button {
    padding: 3rem;
    @media only screen and (min-width: 375px) {
      padding: 4rem;
      font-size: 1.8rem;
    }
  }
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
          <Button onClick={() => history.push('/news')} text="Přidat novinky" />
          <Button
            onClick={() => history.push('/meals')}
            text="Upravit hlavní menu"
          />
          <Button onClick={handleLogOut} text="Upravit napojové menu" />
          <Button onClick={handleLogOut} text="Přidat kartu novinek" />
        </DashboardWrapper>
      </DashboardBackground>
    </PageLayout>
  );
};

export default DashboardPage;
