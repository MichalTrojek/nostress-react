import React, { useRef, useState } from 'react';
import Button from '../button/Button';
import { Form, FormGroup } from '../FormStyles';
import { useAuth } from '../../../contexts/AuthContext';
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
          <input
            id="email"
            placeholder="Email"
            type="email"
            ref={emailRef}
            required
          />
          <label htmlFor="email">Email</label>
        </FormGroup>
        <FormGroup className="form-group" id="password">
          <input
            id="password"
            placeholder="Heslo"
            type="password"
            ref={passwordRef}
            required
          />
          <label htmlFor="password">Heslo</label>
        </FormGroup>
        <Button disabled={loading} type="submit" text="Přihlásít" />

        {error && error}
      </Form>
    </>
  );
}
