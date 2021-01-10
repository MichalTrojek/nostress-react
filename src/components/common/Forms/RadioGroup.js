import styled from 'styled-components';

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 1rem;

  label {
    display: flex;
    align-items: center;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 10px;
    font-weight: bold;
    border: 1px solid var(--color-tertiary);
    cursor: pointer;
  }

  input {
    display: none;
  }

  input:checked + label {
    background-color: var(--color-tertiary);
    color: black;
  }
`;

export default RadioGroup;
