import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  background: transparent;
  width: max-content;
  padding: 3rem;
  padding-top: 5rem;

  Button {
    align-self: stretch;
    font-size: 2rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.6rem;

  label {
    color: transparent;
    font-size: 2rem;
    transition: all 0.2s;
    pointer-events: none;
    transform: translateY(-4.1rem) translateX(1rem);
  }

  input {
    font-size: 2rem;
    align-self: stretch;
    border-radius: 4px;
    border-bottom: 0.5rem solid transparent;

    padding: 1rem;

    &:focus {
      border-color: var(--color-tertiary);
    }

    &:not(:placeholder-shown) + label {
      transform: translateY(-7.6rem);
      color: var(--color-tertiary);
    }
  }
`;
