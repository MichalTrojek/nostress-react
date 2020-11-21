import React, { useState } from 'react';
import PageLayout from '../common/PageLayout';
import Button from '../common/button/Button';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import Editor from '../common/editor/Editor';
import styled from 'styled-components';
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

  const DashboardBackground = styled.section`
    background-color: black;
    height: 100vh;

    padding: 5rem;
  `;

  return (
    <PageLayout>
      <DashboardBackground>
        <Button onClick={handleLogOut} text="log out" />
        <h1>Vytvoř novinku</h1>
        <Editor />
      </DashboardBackground>
    </PageLayout>
  );
};

export default DashboardPage;
