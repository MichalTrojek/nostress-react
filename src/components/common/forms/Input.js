import { useState } from 'react';
import { FormGroup } from './FormStyles';

const Input = ({ type, text }) => {
  const [value, setValue] = useState('');

  function handleValueChange(e) {
    setValue(e.target.value);
  }

  return (
    <FormGroup>
      <input
        value={value}
        onChange={handleValueChange}
        autoComplete="off"
        placeholder={text}
        type={type}
        required
      />
      <label>Email</label>
    </FormGroup>
  );
};

export default Input;
