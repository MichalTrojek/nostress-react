import { useState } from 'react';
import styled from 'styled-components';
import UploadIcon from '../../../../../img/upload.png';
// import { storage } from '../../../../../firebase';

const UploaderContainer = styled.div`
  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  label {
    font-weight: 700;
    color: black;
    padding: 1rem;
    background-color: var(--color-tertiary);
    margin-bottom: 1rem;
    border-radius: 5px;
    font-size: 2rem;

    display: inline-block;
    cursor: pointer;
  }

  img {
    margin-right: 0.5rem;
    width: 100%;
    max-width: 1.5rem;
  }

  input:focus + label,
  input + label:hover {
    filter: brightness(0.9);
  }
`;

const ImageUploader = () => {
  const [localPathToFile, setLocalPathToFile] = useState('');

  return (
    <UploaderContainer>
      <input type="file" name="file" id="file" />
      <label for="file">
        {' '}
        <img src={UploadIcon}></img>VYBRAT OBRÁZEK...
      </label>
    </UploaderContainer>
  );
};

export default ImageUploader;
