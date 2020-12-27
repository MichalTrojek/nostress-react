import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { storage } from '../../../../../firebase';

import { FormGroup } from '../../../../common/Forms/FormStyles';
import Button from '../../../../common/Button';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import '../styles/NewsEditor.css';
import EditorContainer from '../styles/EditorContainer';
import UploaderContainer from '../styles/UploaderContainer';
import Loader from '../../../../common/Loader';

import UploadIcon from '../../../../../img/upload.png';

import editCard from '../../../../../redux/actions/news/card/editCard';
import createCard from '../../../../../redux/actions/news/card/createCard';

import setSelectedItem from '../../../../../redux/actions/editor/setSelectedItem';

const modules = {
  toolbar: [['bold'], [{ color: ['black', '#f2c48c'] }]],
};

const formats = ['bold', 'color'];

const NewsCardsEditor = ({
  createCard,
  editCard,
  selectedItem,
  setSelectedItem,
  toggleEditMode,
  isEditModeOn,
}) => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [filename, setFilename] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (file) {
      uploadImage(file);
    }
    async function uploadImage(file) {
      setLoading(true);
      let storageRef = storage.ref();
      const fileRef = storageRef.child('cardImages/' + filename);
      try {
        await fileRef.put(file);
        const fileUrl = await fileRef.getDownloadURL();
        setFileUrl(fileUrl);
        setLoading(false);
      } catch (error) {
        console.log(`Error while fetching `);
      }
    }
  }, [file]);

  useEffect(() => {
    if (selectedItem) {
      toggleEditMode(true);
      restoreInputFields();
    }

    function restoreInputFields() {
      if (selectedItem) {
        const { heading, content, fileUrl } = selectedItem;

        setHeading(heading);
        setContent(content);
        setFileUrl(fileUrl);
      }
    }
  }, [selectedItem, toggleEditMode]);

  return (
    <EditorContainer>
      <h1 style={{ paddingBottom: '5rem' }}>Editor karet </h1>
      <form onSubmit={handleSubmit}>
        <UploaderContainer>
          {loading ? (
            <Loader style={{ alignSelf: 'center', marginBottom: '1rem' }} />
          ) : (
            <img className="previewImage" src={fileUrl} alt={filename} />
          )}

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
    return isEditModeOn ? (
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
    toggleEditMode(false);
    clearInputs();
    setSelectedItem(null);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (heading.length === 0 || content === 0 || fileUrl === 0 || loading) {
      return;
    }

    const card = {
      fileUrl: fileUrl,
      heading: heading,
      content: content,
    };

    if (isEditModeOn) {
      const { id } = selectedItem;
      editCard({ ...card, id: id });
      toggleEditMode(false);
    } else {
      createCard(card);
    }
    clearInputs();
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
  return {
    selectedItem: state.editor.selectedItem,
    isEditModeOn: state.editor.isEditModeOn,
  };
}

export default connect(mapStateToProps, {
  createCard,
  editCard,
  setSelectedItem,
})(NewsCardsEditor);
