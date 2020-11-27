import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import Button from '../Button';
import './NewsEditor.css';
import { connect } from 'react-redux';
import createNews from '../../../actions/createNews';
import Delta from 'quill-delta';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  & button {
    margin-top: 2rem;
  }
`;

const modules = {
  toolbar: [['bold'], [{ color: ['black', '#f2c48c'] }]],
};

const formats = ['bold', 'color'];

const Editor = ({ allNews, createNews }) => {
  const [value, setValue] = useState();
  const [news, setNews] = useState([]);

  function getContent(content, delta, source, editor) {
    setValue(editor.getContents());
  }

  function handleClick() {
    createNews(JSON.stringify(value));
  }

  return (
    <>
      <EditorContainer>
        <h1>Editor novinek</h1>

        <ReactQuill
          modules={modules}
          formats={formats}
          onChange={getContent}
          placeholder="Vložte text k novince."
        />
        <Button onClick={handleClick} text="Vytvořit novinku"></Button>
      </EditorContainer>
      {news.map((item) => {
        return <h1>{item}</h1>;
      })}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { allNews } = state;
  return { allNews };
};

export default connect(mapStateToProps, { createNews })(Editor);
