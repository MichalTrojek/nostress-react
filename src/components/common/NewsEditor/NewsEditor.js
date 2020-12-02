import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { FormGroup } from '../Forms/FormStyles';
import Button from '../Button';

import createNews from '../../../actions/createNews';

import emptySelectedNewsToEdit from '../../../actions/news/emptySelectedNewsToEdit';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

import './NewsEditor.css';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  button {
    margin-top: 2rem;
    width: 100%;
  }

  h1 {
    padding-bottom: 2rem;
    font-size: 3rem;
  }
`;

const modules = {
  toolbar: [['bold'], [{ color: ['black', '#f2c48c'] }]],
};

const formats = ['bold', 'color'];

const Editor = ({
  createNews,
  selectedNewsToEdit,
  emptySelectedNewsToEdit,
}) => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);

  useEffect(() => {
    if (selectedNewsToEdit.length !== 0) {
      setIsEditModeEnabled(true);
      insertTextToInputFields();
    }
  }, [selectedNewsToEdit]);

  function insertTextToInputFields() {
    const { heading, content, button } = selectedNewsToEdit[0];
    setHeading(heading);
    setContent(content);
    setButtonText(button);
  }

  return (
    <>
      <EditorContainer>
        <h1 style={{ paddingBottom: '5rem' }}>Editor novinek</h1>
        <form onSubmit={handleSubmit}>
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
          <FormGroup className="form-group">
            <input
              id="button"
              onChange={getButtonText}
              value={buttonText}
              placeholder="Text tlačítka"
              type="Text"
            />
            <label htmlFor="heading">Text tlačítka</label>
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
    </>
  );

  function renderEditButtons() {
    return isEditModeEnabled ? (
      <div>
        <Button type="submit" text="Editovat" />
        <Button onClick={cancelEdit} text="Zrušit Editovani" />
      </div>
    ) : (
      <Button type="submit" text="Vytvořit novinku" />
    );
  }

  function cancelEdit() {
    setIsEditModeEnabled(false);
    clearInputs();
    emptySelectedNewsToEdit();
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (heading.length === 0 || content === 0) {
      return;
    }
    createNews(heading, content, buttonText);
    clearInputs();
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
})(Editor);
