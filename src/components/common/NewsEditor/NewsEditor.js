import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import Button from '../Button';
import './NewsEditor.css';

import { connect } from 'react-redux';
import { createNews } from '../../../actions';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  & button {
    margin-top: 2rem;
  }
`;

const modules = {
  toolbar: [[{ header: 1 }], ['bold'], [{ color: ['#ffffff', '#f2c48c'] }]],
};

const formats = ['header', 'bold', 'color'];

const Editor = (props) => {
  const [value, setValue] = useState('');

  function getContent(content, delta, source, editor) {
    setValue(content);
  }

  function handleClick() {
    console.log('clicked in NewsEditor ' + value);
    props.createNews(value);
  }

  return (
    <>
      <EditorContainer>
        <h1>Editor novinek</h1>
        <ReactQuill
          modules={modules}
          formats={formats}
          onChange={getContent}
          placeholder="Vložte nadpis a text k novince. Velikost fontu se nastaví sama podle obrazovky uživatele."
        />
        <Button onClick={handleClick} text="Vytvořit novinku"></Button>
      </EditorContainer>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(null, { createNews })(Editor);
