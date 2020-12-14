import React, { useRef, useState } from 'react';
import Button from '../../../common/Button';
import Form from '../../../common/Forms/Form';
import FormGroup from '../../../common/Forms/FormGroup';
import { useAuth } from '../../../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import InfoLabel from '../../../common/Label/InfoBox';

const LoginBackground = styled.div`
  background-color: black;
  height: 100vh;
`;
const LoginWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  padding: 3rem;
  h1 {
    font-size: 5rem;
  }
  @media only screen and (min-width: 414px) {
    border: 1px solid var(--color-tertiary);
  }
`;

const Login = () => {
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
          <h1 style={{ textAlign: 'center' }}>login</h1>
          <Form action="" onSubmit={handleSubmit}>
            <FormGroup className="form-group" id="email">
              <input
                autoComplete="on"
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
                autoComplete="on"
                id="password"
                placeholder="Heslo"
                type="password"
                ref={passwordRef}
                required
              />
              <label htmlFor="password">Heslo</label>
            </FormGroup>
            <Button type="submit" primary>
              Přihlásít{' '}
            </Button>
            {error && <InfoLabel text={error} />}
          </Form>
        </LoginWrapper>
      </LoginBackground>
    </>
  );
};
export default Login;
