import React, { useState } from 'react';
import PageLayout from '../common/PageLayout';
import Button from '../common/button/Button';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Dashboard = () => {
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
      <h1 style={{ color: 'red' }}>Dashboard</h1>
      <Button onClick={handleLogOut} text="log out" />
      <Link to="/login/update-profile">
        <Button onClick={handleLogOut} text="Update Profile" />
      </Link>
      {error && error}
      <strong>Email: </strong> {currentUser.email}
    </PageLayout>
  );
};

export default Dashboard;
