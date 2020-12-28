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
  isEditModeOn,
}) => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      setSelectedItem(null); // turns off editing mode
    };
  }, [setSelectedItem]);

  useEffect(() => {
    if (isEditModeOn) {
      restoreInputFields();
    }

    function restoreInputFields() {
      if (selectedItem.selectedItemType === 'card') {
        const { heading, content, image } = selectedItem;
        setHeading(heading);
        setContent(content);
        setFileUrl(image.fileUrl);
      }
    }
  }, [selectedItem, isEditModeOn]);

  return (
    <EditorContainer>
      <h1 style={{ paddingBottom: '5rem' }}>Editor karet </h1>
      <form onSubmit={handleSubmit}>
        <UploaderContainer>
          {loading ? (
            <Loader style={{ alignSelf: 'center', marginBottom: '1rem' }} />
          ) : (
            <img className="previewImage" src={fileUrl} alt="" />
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
    const file = event.target.files[0];
    setFileUrl(URL.createObjectURL(file));
    setFile(file);
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
    setSelectedItem(null);
    clearInputs();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      heading.length === 0 ||
      content === 0 ||
      fileUrl === 0 ||
      loading ||
      !file
    ) {
      return;
    }

    const image = await uploadImage(file);

    const card = {
      image: image,
      heading: heading,
      content: content,
      selectedItemType: 'card',
    };

    if (isEditModeOn) {
      const { id } = selectedItem;
      editCard({ ...card, id: id });
      setSelectedItem(null);
    } else {
      createCard(card);
    }
    clearInputs();
  }

  async function uploadImage(file) {
    console.log('uploading');
    setLoading(true);
    let storageRef = storage.ref();
    const filename = `${Date.now()}${file.name}`;
    const fileRef = storageRef.child('cardImages/' + filename);

    try {
      await fileRef.put(file);
      const fileUrl = await fileRef.getDownloadURL();
      setLoading(false);
      return { fileUrl, filename };
    } catch (error) {
      console.log(`Error while fetching `);
    }
  }

  function clearInputs() {
    setHeading('');
    setContent('');
    setFileUrl('');
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
