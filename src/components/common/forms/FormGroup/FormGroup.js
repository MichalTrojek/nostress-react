import { getByDisplayValue } from '@testing-library/react';
import { useState } from 'react';
import styled from 'styled-components';

const FormGroupStyled = styled.div`
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
    font-weight: bold;
  }

  input {
    font-size: var(--form-group-form-size);
    align-self: stretch;
    border-radius: 4px;
    --input-border-width: 0.7rem;
    border-bottom: var(--input-border-width) solid transparent;
    border-top: var(--input-border-width) solid transparent;
    padding: 0.5rem;
    margin-top: 2rem;

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

const FormGroup = ({ type, placeholder, getValue }) => {
  const [value, setValue] = useState('');

  return (
    <FormGroupStyled>
      <input
        id="inputComponent"
        onChange={setValueOnChange}
        value={value}
        placeholder={placeholder}
        type={type}
        required
      />
      <label htmlFor="inputComponent">{placeholder}</label>
    </FormGroupStyled>
  );

  function setValueOnChange(event) {
    setValue(event.target.value);
    getValue(value);
  }
};

export default FormGroup;
