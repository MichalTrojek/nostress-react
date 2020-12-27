import styled from 'styled-components';
const UploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  label {
    text-align: center;
    padding: 1rem 0;
    font-weight: 700;
    color: black;

    background-color: var(--color-tertiary);

    border-radius: 10px;
    font-size: 2rem;
    display: inline-block;
    cursor: pointer;
  }

  .icon {
    margin-right: 0.5rem;
    width: 100%;
    max-width: 1.5rem;
  }

  input:focus + label,
  input + label:hover {
    filter: brightness(0.9);
  }

  .previewImage {
    margin-bottom: 1rem;
    max-height: 30rem;
    max-width: 30rem;
    align-self: center;
  }

  Loader {
    align-self: center;
  }
`;

export default UploaderContainer;
