import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import Button from '../button/Button';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const modules = {
  toolbar: [['bold'], [{ color: ['#ffffff', '#f2c48c'] }]],
};

const formats = ['bold', 'color'];

const Editor = () => {
  const [value, setValue] = useState('');

  return (
    <>
      <EditorContainer>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder="Vložte nadpis a text k novince. Velikost fontu se nastaví sama podle obrazovky uživatele."
        ></ReactQuill>
        <Button text="test"></Button>
      </EditorContainer>
    </>
  );
};

export default Editor;
