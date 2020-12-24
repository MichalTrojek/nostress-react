import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { FormGroup } from '../../../common/Forms/FormStyles';
import Button from '../../../common/Button';

import ReactQuill from 'react-quill';

import editNews from '../../../../redux/actions/news/editNews';
import createNews from '../../../../redux/actions/news/createNews';
import emptySelectedNewsToEdit from '../../../../redux/actions/news/emptySelectedNewsToEdit';

import ImageUploader from './ImageUploader';

import 'react-quill/dist/quill.snow.css';
import './NewsEditor.css';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  button {
    margin-top: 2rem;
    width: 100%;
  }
`;

const modules = {
  toolbar: [['bold'], [{ color: ['black', '#f2c48c'] }]],
};

const formats = ['bold', 'color'];

const NewsCardsEditor = ({
  createNews,
  editNews,
  selectedNewsToEdit,
  emptySelectedNewsToEdit,
  setIsEditModeEnabled,
  isEditModeEnabled,
}) => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    if (selectedNewsToEdit.length !== 0) {
      setIsEditModeEnabled(true);
      insertTextToInputFields();
    }

    function insertTextToInputFields() {
      const { heading, content, button } = selectedNewsToEdit[0];
      setHeading(heading);
      setContent(replaceWhiteWithBlackColor(content));
      setButtonText(button);
    }

    function replaceWhiteWithBlackColor(text) {
      return text.replaceAll('white', 'black');
    }
  }, [selectedNewsToEdit, setIsEditModeEnabled]);

  return (
    <EditorContainer>
      <h1 style={{ paddingBottom: '5rem' }}>Editor novinek</h1>

      <form onSubmit={handleSubmit}>
        <ImageUploader />
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
    if (heading.length === 0 || content === 0) {
      return;
    }

    if (isEditModeEnabled) {
      const { id } = selectedNewsToEdit[0];
      editNews(id, heading, replaceBlackWithWhiteColor(content), buttonText);
      setIsEditModeEnabled(false);
    } else {
      createNews(heading, replaceBlackWithWhiteColor(content), buttonText);
    }
    clearInputs();
  }

  function replaceBlackWithWhiteColor(text) {
    return text.replaceAll('black', 'white');
  }

  function clearInputs() {
    setHeading('');
    setContent('');
    setButtonText('');
  }
  function getHeading(event) {
    setHeading(event.target.value);
  }

  function getButtonText(event) {
    setButtonText(event.target.value);
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
  createNews,
  emptySelectedNewsToEdit,
  editNews,
})(NewsCardsEditor);