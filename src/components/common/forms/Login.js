import React, { useRef, useState } from 'react';
import Button from '../button/Button';
import { Form, FormGroup } from './FormStyles';
import { useAuth } from '../../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import InfoLabel from './InfoLabel';
import Input from './Input';
const LoginBackground = styled.div`
  background-color: black;
  height: 100vh;
`;
const LoginWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
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

  return (
    <>
      <LoginBackground>
        <LoginWrapper>
          <Form action="" onSubmit={handleSubmit}>
            <FormGroup className="form-group" id="email">
              <Input type="email" text="Email" />
            </FormGroup>
            <FormGroup className="form-group" id="password">
              <Input type="password" text="Heslo" />
            </FormGroup>
            <Button disabled={loading} type="submit" text="Přihlásít" />
            {error && <InfoLabel text={error} />}
          </Form>
        </LoginWrapper>
      </LoginBackground>
    </>
  );
}
