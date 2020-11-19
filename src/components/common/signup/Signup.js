import React, { useRef, useState } from 'react';
import Button from '../button/Button';
import { Form, FormGroup } from '../FormStyles';
import { useAuth } from '../../../contexts/AuthContext';

export default function Signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
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
        <FormGroup className="form-group" id="password-confirm">
          <label htmlFor="">Password Confirmation</label>
          <input type="password" ref={passwordConfirmRef} required />
        </FormGroup>
        <Button disabled={loading} type="submit" text="Sign Up"></Button>
        <p>
          Already have an account? <Link to="/signup">Log In</Link>
        </p>
        {error && <p>{error}</p>}
      </Form>
    </>
  );
}
