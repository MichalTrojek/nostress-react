import React, { useRef } from 'react';
import Button from '../common/button/Button';
import styled from 'styled-components';
const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    background: grey;
    width: max-content;
    padding: 2rem;
  `;

  const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
  `;

  return (
    <Form action="">
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
      <Button type="submit" text="Sign Up"></Button>
    </Form>
  );
};

export default Signup;
