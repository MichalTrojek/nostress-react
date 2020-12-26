import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { storage } from '../../../../firebase';

import { FormGroup } from '../../../common/Forms/FormStyles';
import Button from '../../../common/Button';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './NewsEditor.css';

import EditorContainer from './styles/EditorContainer';
import UploaderContainer from './styles/UploaderContainer';

import UploadIcon from '../../../../img/upload.png';

import editNews from '../../../../redux/actions/news/editNews';
import createCard from '../../../../redux/actions/news/card/createCard';
import emptySelectedNewsToEdit from '../../../../redux/actions/news/emptySelectedNewsToEdit';

const modules = {
  toolbar: [['bold'], [{ color: ['black', '#f2c48c'] }]],
};

const formats = ['bold', 'color'];

const NewsCardsEditor = ({
  createCard,
  editNews,
  selectedNewsToEdit,
  emptySelectedNewsToEdit,
  setIsEditModeEnabled,
  isEditModeEnabled,
}) => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [filename, setFilename] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    uploadImage(file);
    async function uploadImage(file) {
      let storageRef = storage.ref();
      const fileRef = storageRef.child('cardImages/' + filename);
      try {
        await fileRef.put(file);
        const fileUrl = await fileRef.getDownloadURL();
        setFileUrl(fileUrl);
      } catch (error) {
        console.log(`Error while fetching `);
      }
    }
  }, [file]);

  return (
    <EditorContainer>
      <h1 style={{ paddingBottom: '5rem' }}>Editor karet </h1>
      <form onSubmit={handleSubmit}>
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
            VYBRAT OBRÁZEK...
          </label>
        </UploaderContainer>
        <FormGroup className="form-group">
          <input
            id="heading"
            onChange={getHeading}
            value={heading}
            placeholder="Nadpis"
            type="Text"
            required
          />
          <label htmlFor="heading">Nadpis</label>
        </FormGroup>

        <ReactQuill
          modules={modules}
          formats={formats}
          value={content}
          onChange={getContent}
          placeholder="Vložte text k novince."
        />
        {renderEditButtons()}
      </form>
    </EditorContainer>
  );

  function handleChange(event) {
    let file = event.target.files[0];
    setFile(file);
    setFilename(file.name);
  }
  function renderEditButtons() {
    return isEditModeEnabled ? (
      <div>
        <Button primary>změnit</Button>
        <Button primary onClick={handleCancelEdit}>
          Zrušit editování
        </Button>
      </div>
    ) : (
      <Button primary> Vytvořit novinku</Button>
    );
  }

  function handleCancelEdit() {
    setIsEditModeEnabled(false);
    clearInputs();
    emptySelectedNewsToEdit();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (heading.length === 0 || content === 0 || fileUrl === 0) {
      return;
    }

    const card = {
      fileUrl: fileUrl,
      heading: heading,
      content: replaceBlackWithWhiteColor(content),
    };

    console.log(card);
    if (isEditModeEnabled) {
      // const { id } = selectedNewsToEdit[0];
      // editNews(id, heading, replaceBlackWithWhiteColor(content), buttonText);
      // setIsEditModeEnabled(false);
    } else {
      createCard(card);
    }
    clearInputs();
  }

  function replaceBlackWithWhiteColor(text) {
    return text.replaceAll('black', 'white');
  }

  function clearInputs() {
    setHeading('');
    setContent('');
    setFileUrl('');
    setFilename('');
  }
  function getHeading(event) {
    setHeading(event.target.value);
  }

  function getContent(content, delta, source, editor) {
    setContent(content);
  }
};

function mapStateToProps(state, prevState) {
  const { selectedNewsToEdit } = state;
  return {
    selectedNewsToEdit,
  };
}

export default connect(mapStateToProps, {
  createCard,
  emptySelectedNewsToEdit,
  editNews,
})(NewsCardsEditor);
