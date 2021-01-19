import styled from 'styled-components';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  button {
    margin-top: 2rem;
    width: 100%;
  }

  .selector {
    padding-bottom: 3rem;

    label {
      /* font-weight: bold; */
    }
    select {
      margin-top: 1rem;
      font-size: 1.1rem;

      @media only screen and (min-width: 320px) {
        font-size: 1.35rem;
      }
      @media only screen and (min-width: 768px) {
        margin-top: 0;
        margin-left: 2rem;
        font-size: 2rem;
      }
      cursor: pointer;
      border-radius: 5px;
      padding-left: 1rem;
    }
  }
`;

export default EditorContainer;
