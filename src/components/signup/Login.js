import React, { useRef, useState } from 'react';
import Button from '../common/button/Button';
import { Form, FormGroup } from './FormStyles';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const history = useHistory();

  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/dashboard');
    } catch {
      setError('Failed to login');
    }

    setLoading(false);
  }

  return (
    <>
      <Form action="" onSubmit={handleSubmit}>
        <FormGroup className="form-group" id="email">
          <label htmlFor="">Email</label>
          <input type="email" ref={emailRef} required />
        </FormGroup>
        <FormGroup className="form-group" id="password">
          <label htmlFor="">Password</label>
          <input type="password" ref={passwordRef} required />
        </FormGroup>
        <Button disabled={loading} type="submit" text="Log in" />
        <p>
          Need an account? <Link to="/signup">Sign Up</Link>
        </p>
        {error && error}
      </Form>
    </>
  );
}
