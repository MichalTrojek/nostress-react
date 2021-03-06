import styled from 'styled-components';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { showWarningToast } from '../../../../notifications/toast';
import Button from '../../../common/Button';

import setSelectedItem from '../../../../redux/actions/editor/setSelectedItem';

import Modal from '../../../common/Modal';

const StyledNewsListItem = styled.div`
  position: relative;
  padding: 2rem;

  border: 1px solid var(--color-tertiary);
  margin: 0.2rem;

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

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

  .listItemImage {
    max-width: 10rem;
    height: auto;
  }
`;

const NewsListItem = ({
  item,
  deleteNews,
  toggleEditMode,
  isEditModeOn,
  setSelectedItem,
  selectedItem,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isSelected && selectedItem) {
      if (selectedItem.id !== item.id) {
        setIsSelected(false);
      }
    } else {
      if (!toggleEditMode) {
        setIsSelected(false);
      }
    }
  }, [selectedItem, toggleEditMode, isSelected, item.id]);

  return (
    <StyledNewsListItem isSelected={isSelected}>
      {renderImage()}
      <p>{item.heading}</p>
      <div className="buttons">
        <Button primary onClick={() => handleEdit()}>
          Editovat
        </Button>
        <Button onClick={() => setShowModal(true)}>Smazat</Button>
      </div>
      <Modal
        text={`Potvrďte vymazání.`}
        confirm={handleDelete}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </StyledNewsListItem>
  );

  function renderImage() {
    if (item.image) {
      return (
        <img
          className="listItemImage"
          src={item.image.fileUrl}
          alt={item.image.filename}
        ></img>
      );
    }
  }

  function handleEdit() {
    setSelectedItem(item);
    setIsSelected(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleDelete() {
    if (!isEditModeOn) {
      deleteNews(item);
    } else {
      showWarningToast('Nelze mazat během editování.');
    }
  }
};

function mapStateToProps(state, prevState) {
  return {
    selectedItem: state.editor.selectedItem,
    isEditModeOn: state.editor.isEditModeOn,
  };
}
export default connect(mapStateToProps, {
  setSelectedItem,
})(NewsListItem);
