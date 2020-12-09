import { useState, useEffect } from 'react';
import FormGroupStyled from './FormGroupStyled';
import { connect } from 'react-redux';

const FormGroup = ({
  name,
  type,
  placeholder,
  sendValueToParent,
  selectedItem,
}) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (selectedItem) {
      setValue(selectedItem[name]);
    } else {
      setValue('');
    }
  }, [selectedItem]);

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
    sendValueToParent(value);
  }
};
function mapStateToProps(state, ownProps) {
  return {
    selectedItem: state.editor.selectedItem,
  };
}
export default connect(mapStateToProps)(FormGroup);
