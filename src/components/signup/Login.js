import React, { useRef, useState } from 'react';
import Button from '../common/button/Button';
import { Form, FormGroup } from './FormStyles';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      // history.push('/');
    } catch {
      setError('Failed to create an account');
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
      </Form>
    </>
  );
}
