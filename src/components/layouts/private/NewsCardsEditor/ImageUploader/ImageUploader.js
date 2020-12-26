import { useState, useEffect } from 'react';
import styled from 'styled-components';
import UploadIcon from '../../../../../img/upload.png';
import { storage } from '../../../../../firebase';

const UploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

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
`;

const ImageUploader = ({ setImageUrl }) => {
  const [filename, setFilename] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchImage(file);
    async function fetchImage(file) {
      let storageRef = storage.ref();
      const fileRef = storageRef.child('cardImages/' + filename);
      try {
        await fileRef.put(file);
        const fileUrl = await fileRef.getDownloadURL();
        setFileUrl(fileUrl);
        setImageUrl(fileUrl);
      } catch (error) {
        console.log(`Error while fetching `);
      }
    }
  }, [file]);

  return (
    <UploaderContainer>
      <img className="previewImage" src={fileUrl} alt={filename} />
      <input
        type="file"
        name="file"
        id="file"
        onChange={(event) => handleChange(event)}
        accept="image/png, image/jpeg"
      />
      <label htmlFor="file">
        <img className="icon" src={UploadIcon} alt="icon " />
        {filename ? `${filename}` : 'VYBRAT OBRÁZEK...'}
      </label>
    </UploaderContainer>
  );

  function handleChange(event) {
    let file = event.target.files[0];
    setFile(file);
    setFilename(file.name);
  }
};

export default ImageUploader;
