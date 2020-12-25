import styled from 'styled-components';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { showWarningToast } from '../../../../../notifications/toast';
import Button from '../../../../common/Button';

import deleteNews from '../../../../../redux/actions/news/deleteNews';
import setSelectedNewsToEdit from '../../../../../redux/actions/news/setSelectedNewsToEdit';
import emptySelectedNewsToEdit from '../../../../../redux/actions/news/emptySelectedNewsToEdit';

const StyledNewsListItem = styled.div`
  padding: 2rem;
  border: 1px solid var(--color-tertiary);
  margin: 0.2rem;
  min-width: 100%;
  @media only screen and (min-width: 768px) {
    --width: calc((98% / 2));
    max-width: var(--width);
    min-width: var(--width);
  }

  @media only screen and (min-width: 1024px) {
    --width: calc((99% / 2));
  }

  .buttons {
    margin-top: 1rem;
    display: flex;
    Button {
      width: 50%;
    }
  }

  Button:first-child {
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
  }, [selectedNewsToEdit, isEditModeEnabled, isSelected, item.id]);

  return (
    <StyledNewsListItem isSelected={isSelected}>
      <p>{item.heading}</p>
      <div className="buttons">
        <Button primary onClick={() => handleEdit(item.id)}>
          Editovat
        </Button>
        <Button onClick={() => handleDelete(item.id)}>Smazat</Button>
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
