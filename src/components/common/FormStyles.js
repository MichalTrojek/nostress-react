import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  background: grey;
  width: max-content;
  padding: 2rem;

  Button {
    align-self: stretch;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding-bottom: 2rem;
  input {
    align-self: stretch;
  }
`;
