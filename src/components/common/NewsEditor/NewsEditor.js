import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { FormGroup } from '../forms/FormStyles';
import Button from '../Button';

import createNews from '../../../actions/createNews';
import fetchNews from '../../../actions/fetchNews';

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

const DisplayedNews = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const News = styled.div`
  padding: 2rem;

  h1 {
    font-size: 2rem;
  }
`;

const modules = {
  toolbar: [['bold'], [{ color: ['black', '#f2c48c'] }]],
};

const formats = ['bold', 'color'];

const Editor = ({ news, createNews, fetchNews }) => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState();

  useEffect(() => {
    if (news.length === 0) {
      fetchNews();
    }
  });

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
      <DisplayedNews>
        {news.map((item, index) => {
          return (
            <News>
              <h1 key={index}>{item.heading}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: JSON.parse(item.content) }}
              ></div>
            </News>
          );
        })}
      </DisplayedNews>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { news } = state;
  return { news };
};

export default connect(mapStateToProps, { createNews, fetchNews })(Editor);
