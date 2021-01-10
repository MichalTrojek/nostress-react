import styled from 'styled-components';

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 1rem;

  label {
    display: block;
    text-align: center;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 10px;
    font-weight: bold;
    border: 1px solid var(--color-tertiary);
    cursor: pointer;
    width: 100%;
    margin-bottom: 1rem;

    @media only screen and (min-width: 931px) {
      margin-bottom: 0;
      width: 33%;
    }
  }

  input {
    display: none;
  }

  input:checked + label {
    background-color: var(--color-tertiary);
    color: black;
  }

  input:disabled + label {
    background-color: transparent;
    color: grey;
    border: grey 1px solid;
    cursor: default;
  }
`;

export default RadioGroup;
