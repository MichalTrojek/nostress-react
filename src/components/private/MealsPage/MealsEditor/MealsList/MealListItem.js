import styled from 'styled-components';
import { useState } from 'react';

import { connect } from 'react-redux';

import Button from '../../../../common/Button';
import Modal from '../../../../common/Modal';

import setSelectedItem from '../../../../../redux/actions/editor/setSelectedItem';
import deleteMeal from '../../../../../redux/actions/data/meals/deleteMeal';
import { showInfoToast } from '../../../../../notifications/toast';

const MealListItemContainer = styled.div`
  border: 1px solid var(--color-tertiary);
  padding: 1rem;
  display: grid;
  grid-template-rows: max-content 1fr;

  margin: 0.2rem;

  position: relative;

  border-radius: 10px;
  border-top-right-radius: 0px;

  .menuNumber {
    position: absolute;
    top: -0.5px;
    right: -0.5px;
    padding: 0 1rem 0 1rem;
    background-color: white;
    color: black;
    font-weight: bold;
    border-bottom-left-radius: 10px;

    border-top: 2px solid var(--color-tertiary);
    border-right: 2px solid var(--color-tertiary);
    border-left: 2px solid var(--color-tertiary);
    border-bottom: 2px solid var(--color-tertiary);
  }

  .buttons {
    margin-top: 1rem;
    display: flex;

    Button {
      width: 50%;
    }
    Button:first-child {
      margin-right: 1rem;
    }

    @media only screen and (max-width: 1161px) {
      flex-direction: column;
      Button {
        width: 100%;
      }
      Button:last-child {
        margin-top: 1rem;
      }
    }
  }

  .price {
    color: var(--color-tertiary);
  }
`;

const MealListItem = ({ meal, isEditModeOn, setSelectedItem, deleteMeal }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <MealListItemContainer>
      <p className="menuNumber">{meal.menuNumber} </p>
      {renderMealType()}
      <p>Název: {meal.name}</p>
      <p>Alergeny: ({meal.alergens.join(', ')})</p>
      <p className="price">Cena: {meal.price},-</p>

      <div className="buttons">
        <Button primary onClick={handleEdit}>
          editovat{' '}
        </Button>
        <Button onClick={() => setShowModal(true)}>smazat</Button>
      </div>
      <Modal
        text={`Potvrďte vymazání menu číslo: ${meal.menuNumber}`}
        confirm={handleDelete}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </MealListItemContainer>
  );

  function renderMealType() {
    let text = 'Týdenní menu';
    if (meal.type === 'isChildMeal') {
      text = 'Dětské menu';
    } else if (meal.type === 'isBreakfastMeal') {
      text = 'Snídaňové menu';
    }
    return <p style={{ fontWeight: 'bold' }}>{text}</p>;
  }

  function handleEdit() {
    setSelectedItem(meal);
    window.scroll({ top: 0, behavior: 'smooth' });
  }

  function handleDelete() {
    if (!isEditModeOn) {
      deleteMeal(meal);
    } else {
      showInfoToast('Nelze mazat během editování.');
    }
  }
};

function mapStateToProps(state, ownProps) {
  return { isEditModeOn: state.editor.isEditModeOn };
}

export default connect(mapStateToProps, {
  setSelectedItem,
  deleteMeal,
})(MealListItem);
