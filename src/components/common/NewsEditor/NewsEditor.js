import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { FormGroup } from '../forms/FormStyles';
import Button from '../Button';

import createNews from '../../../actions/createNews';

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

const Editor = ({ createNews }) => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('');
  const [buttonText, setButtonText] = useState('');

  function getContent(content, delta, source, editor) {
    setContent(content);
  }
  function getHeading(event) {
    setHeading(event.target.value);
  }

  function getButtonText(event) {
    setButtonText(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (heading.length === 0 || content === 0) {
      return;
    }
    createNews(heading, content, buttonText);
    setHeading('');
    setContent('');
    setButtonText('');
  }

  return (
    <>
      <EditorContainer>
        <h1>Editor novinek</h1>
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

          <Button type="submit" text="Vytvořit novinku"></Button>
        </form>
      </EditorContainer>
    </>
  );
};

export default connect(null, { createNews })(Editor);
