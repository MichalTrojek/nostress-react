import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import Button from '../Button';
import './NewsEditor.css';

import { connect } from 'react-redux';
import { createNews, fetchNews } from '../../../actions';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  & button {
    margin-top: 2rem;
  }
`;

const modules = {
  toolbar: [[{ header: 1 }], ['bold'], [{ color: ['black', '#f2c48c'] }]],
};

const formats = ['header', 'bold', 'color'];

const Editor = ({ allNews, createNews }) => {
  const [value, setValue] = useState('');
  const [news, setNews] = useState([]);
  useEffect(() => {
    setNews(allNews);
  }, []);

  function getContent(content, delta, source, editor) {
    setValue(content);
  }

  function handleClick() {
    createNews(value);
    news.push(value);
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

export default connect(mapStateToProps, { createNews, fetchNews })(Editor);
