import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  position: relative Button {
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

  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;

    input {
      width: 2rem;
      height: 2rem;
    }

    label {
      font-size: 2rem;
      padding-left: 2rem;
    }
  }
`;

export default Form;
