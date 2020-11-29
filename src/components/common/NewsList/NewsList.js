import Button from '../Button';
import fetchNews from '../../../actions/fetchNews';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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

  .buttons {
    display: flex;
  }

  button:first-child {
    margin-right: 1rem;
    width: 12rem;
  }
`;

const NewsList = ({ news, fetchNews }) => {
  useEffect(() => {
    if (news.length === 0) {
      fetchNews();
    }
  }, []);

  function handleDelete() {
    console.log('delete');
  }

  function handleEdit() {
    console.log('edit');
  }

  return (
    <DisplayedNews>
      {news.map((item, index) => {
        return (
          <News key={index}>
            <h1>{item.heading}</h1>
            <div className="buttons">
              <Button onClick={handleEdit} text="Editovat"></Button>
              <Button onClick={handleDelete} text="Smazat"></Button>
            </div>
          </News>
        );
      })}
    </DisplayedNews>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { news } = state;
  return { news };
};

export default connect(mapStateToProps, { fetchNews })(NewsList);
