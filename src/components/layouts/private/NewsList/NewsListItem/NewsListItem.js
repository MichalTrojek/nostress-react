import styled from 'styled-components';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { showWarningToast } from '../../../../../notifications/toast';
import Button from '../../../../common/Button';

import setSelectedItem from '../../../../../redux/actions/editor/setSelectedItem';

const StyledNewsListItem = styled.div`
  padding: 2rem;
  border: 1px solid var(--color-tertiary);
  margin: 0.2rem;
  min-width: 100%;
  border-radius: 10px;
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
  item,
  deleteNews,
  toggleEditMode,
  isEditModeOn,
  setSelectedItem,
  selectedItem,
}) => {
  const [isSelected, setIsSelected] = useState(false);

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
      <p>{item.heading}</p>
      <div className="buttons">
        <Button primary onClick={() => handleEdit(item)}>
          Editovat
        </Button>
        <Button onClick={() => handleDelete(item.id)}>Smazat</Button>
      </div>
    </StyledNewsListItem>
  );

  function handleEdit(item) {
    setSelectedItem(item);
    setIsSelected(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleDelete(id) {
    if (!isEditModeOn) {
      deleteNews(id);
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
