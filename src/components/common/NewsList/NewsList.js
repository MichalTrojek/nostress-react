import Button from '../Button';
import fetchNews from '../../../actions/fetchNews';
import deleteNews from '../../../actions/deleteNews';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const DisplayedNews = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

const News = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid var(--color-tertiary);

  h1 {
    font-size: 2rem;
    padding-bottom: 1rem;
  }

  .buttons {
    display: flex;
  }

  button:first-child {
    margin-right: 1rem;
    width: 12rem;
  }
`;

const NewsList = ({ news, fetchNews, deleteNews }) => {
  useEffect(() => {
    if (news.length === 0) {
      fetchNews();
    }
  }, []);

  function handleDelete(id) {
    deleteNews(id);
  }

  function handleEdit() {
    console.log('edit');
  }

  return (
    <>
      <h1>Novinky</h1>
      <DisplayedNews>
        {news.map((item, index) => {
          return (
            <News key={index}>
              <h1>{item.heading}</h1>
              <div className="buttons">
                <Button onClick={handleEdit} text="Editovat"></Button>
                <Button
                  onClick={() => handleDelete(item.id)}
                  text="Smazat"
                ></Button>
              </div>
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

export default connect(mapStateToProps, { fetchNews, deleteNews })(NewsList);
