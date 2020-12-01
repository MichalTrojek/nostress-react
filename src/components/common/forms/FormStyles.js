import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  --form-group-form-size: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    color: transparent;
    font-size: var(--form-group-form-size);
    transition: all 0.2s;
    transform: translateY(-4.1rem) translateX(1rem);
    pointer-events: none;
  }

  input {
    font-size: var(--form-group-form-size);
    align-self: stretch;
    border-radius: 4px;

    --input-border-width: 0.7rem;
    border-bottom: var(--input-border-width) solid transparent;
    border-top: var(--input-border-width) solid transparent;

    padding: 0.5rem;

    &:focus {
      border-color: var(--color-tertiary);
      border-top-color: transparent;
    }

    &:not(:placeholder-shown) + label {
      transform: translateY(-7.6rem);
      color: var(--color-tertiary);
    }
  }
`;
