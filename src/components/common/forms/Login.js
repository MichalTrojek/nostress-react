import React, { useRef, useState } from 'react';
import Button from '../Button';
import { Form, FormGroup } from './FormStyles';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import InfoLabel from './InfoLabel';

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
      setError('Nepodařilo se přihlásit');
    }

    setLoading(false);
  }

  const LoginBackground = styled.div`
    background-color: black;
    height: 100vh;
  `;
  const LoginWrapper = styled.section`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid var(--color-tertiary);
    padding: 1rem;
  `;

  return (
    <>
      <LoginBackground>
        <LoginWrapper>
          <h1 style={{ textAlign: 'center' }}>login</h1>
          <Form action="" onSubmit={handleSubmit}>
            <FormGroup className="form-group" id="email">
              <input
                autoComplete="off"
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
            {error && <InfoLabel text={error} />}
          </Form>
        </LoginWrapper>
      </LoginBackground>
    </>
  );
}
