import styled from 'styled-components';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { showWarningToast } from '../../../notifications/toast';
import Button from '../Button';

import deleteNews from '../../../actions/news/deleteNews';
import setSelectedNewsToEdit from '../../../actions/news/setSelectedNewsToEdit';
import emptySelectedNewsToEdit from '../../../actions/news/emptySelectedNewsToEdit';

const StyledNewsListItem = styled.div`
  margin-bottom: 1rem;
  padding: 2rem;
  border: 1px solid
    ${(props) => (props.isSelected ? 'white' : 'var(--color-tertiary)')};
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

const NewsListItem = ({
  news,
  item,
  deleteNews,
  isEditModeEnabled,
  setSelectedNewsToEdit,
  selectedNewsToEdit,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (isSelected && selectedNewsToEdit[0]) {
      if (selectedNewsToEdit[0].id !== item.id) {
        setIsSelected(false);
      }
    } else {
      if (!isEditModeEnabled) {
        setIsSelected(false);
      }
    }
  }, [selectedNewsToEdit]);

  return (
    <StyledNewsListItem isSelected={isSelected}>
      <h2>{item.heading}</h2>
      <div className="buttons">
        <Button onClick={() => handleEdit(item.id)} text="Editovat"></Button>
        <Button onClick={() => handleDelete(item.id)} text="Smazat"></Button>
      </div>
    </StyledNewsListItem>
  );

  function handleEdit(id) {
    const selectedNews = news.filter((item) => item.id === id);
    setSelectedNewsToEdit(selectedNews);
    setIsSelected(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleDelete(id) {
    if (!isEditModeEnabled) {
      deleteNews(id);
    } else {
      showWarningToast('Nelze mazat během editování.');
    }
  }
};

function mapStateToProps(state, prevState) {
  const { selectedNewsToEdit } = state;
  return {
    selectedNewsToEdit,
  };
}
export default connect(mapStateToProps, {
  deleteNews,
  setSelectedNewsToEdit,
  emptySelectedNewsToEdit,
})(NewsListItem);
