import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;

  Button {
    align-self: stretch;
    font-size: 2rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
    Button {
      margin: 0 1rem;
    }
  }

  textarea {
    border-radius: 5px;
    padding: 1rem;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export default Form;
