import styled from 'styled-components';

const RadioGroup = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  padding-bottom: 1rem;

  label {
    display: flex;
    align-items: center;
    font-size: 2rem;
    margin-left: 2rem;
    input {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
      cursor: pointer;
    }
  }
`;

export default RadioGroup;
