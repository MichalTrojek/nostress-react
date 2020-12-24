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
    margin-left: 2rem;
    min-width: 30rem;

    input {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
      cursor: pointer;
    }
  }
`;

export default RadioGroup;
