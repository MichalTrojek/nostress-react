import Button from '../Button';
import fetchNews from '../../../actions/fetchNews';
import deleteNews from '../../../actions/deleteNews';
import setSelectedNewsToEdit from '../../../actions/news/setSelectedNewsToEdit';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const DisplayedNews = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

const News = styled.div`
  margin-bottom: 1rem;
  padding: 2rem;
  border: 1px solid var(--color-tertiary);
  text-align: center;
  .buttons {
    margin-top: 1rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  button:first-child {
    margin-right: 1rem;
  }
`;

const NewsList = ({ news, fetchNews, deleteNews, setSelectedNewsToEdit }) => {
  useEffect(() => {
    if (news.length === 0) {
      fetchNews();
    }
  }, [fetchNews, news.length]);

  function handleDelete(id) {
    deleteNews(id);
  }

  function handleEdit(id) {
    const selectedNews = news.filter((item) => item.id === id);
    setSelectedNewsToEdit(selectedNews);
  }

  return (
    <>
      <h1>Seznam novinek</h1>
      <DisplayedNews>
        {news.map((item, index) => {
          return (
            <News key={index}>
              <h1>{item.heading}</h1>
              <div className="buttons">
                <Button
                  onClick={() => handleEdit(item.id)}
                  text="Editovat"
                ></Button>
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

export default connect(mapStateToProps, {
  fetchNews,
  deleteNews,
  setSelectedNewsToEdit,
})(NewsList);
