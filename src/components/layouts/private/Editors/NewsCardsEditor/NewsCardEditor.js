import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { FormGroup } from '../../../../common/Forms/FormStyles';
import Button from '../../../../common/Button';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import '../styles/NewsEditor.css';
import EditorContainer from '../styles/EditorContainer';
import UploaderContainer from '../styles/UploaderContainer';

import Loader from '../../../../common/Loader';

import UploadIcon from '../../../../../img/upload.png';

import editCard from '../../../../../redux/actions/data/cards/editCard';
import createCard from '../../../../../redux/actions/data/cards/createCard';

import setSelectedItem from '../../../../../redux/actions/editor/setSelectedItem';

import { uploadImage } from '../../../../../utils/imageUtils';

import { v4 as uuidv4 } from 'uuid';

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
        setFile(null);
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

    var binaryData = [];
    binaryData.push(file);
    window.URL.createObjectURL(new Blob(binaryData, { type: 'image' }));
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
    if (heading.length === 0 || content === 0 || fileUrl === 0 || loading) {
      return;
    }

    let image;
    if (file) {
      image = await uploadImage(setLoading, file);
    } else {
      image = selectedItem.image;
    }

    const card = {
      id: uuidv4(),
      image: image,
      heading: heading,
      content: content,
      selectedItemType: 'card',
    };

    if (isEditModeOn) {
      const { id } = selectedItem;
      editCard({ ...card, id: id }, selectedItem);
      setSelectedItem(null);
    } else {
      createCard(card);
    }
    clearInputs();
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
