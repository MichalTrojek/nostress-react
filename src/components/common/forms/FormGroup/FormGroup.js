import { useState } from 'react';
import FormGroupStyled from './FormGroupStyled';

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
