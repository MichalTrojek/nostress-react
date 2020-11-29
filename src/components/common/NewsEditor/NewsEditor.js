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

  button {
    margin-top: 2rem;
    width: 100%;
  }

  h1 {
    padding: 4rem 0;
    font-size: 3rem;
  }
`;

const modules = {
  toolbar: [['bold'], [{ color: ['black', '#f2c48c'] }]],
};

const formats = ['bold', 'color'];

const Editor = ({ createNews }) => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState();

  function getContent(content, delta, source, editor) {
    setContent(content);
  }
  function getHeading(event) {
    setHeading(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (heading.length === 0 || content === undefined) {
      return;
    }
    createNews(heading, content);
  }

  return (
    <>
      <EditorContainer>
        <h1>Editor novinek</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup className="form-group" id="password">
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
            defaultValue={content}
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
