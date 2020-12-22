import { connect } from 'react-redux';
import Button from '../../../common/Button';

import styled from 'styled-components';

import setSelectedItem from '../../../../redux/actions/editor/setSelectedItem';
import toggleEditMode from '../../../../redux/actions/editor/toggleEditMode';
import deleteMeal from '../../../../redux/actions/meals/deleteMeal';
import { showInfoToast } from '../../../../notifications/toast';

const MealListItemContainer = styled.div`
  border: 1px solid var(--color-tertiary);
  padding: 1rem;
  display: grid;
  grid-template-rows: max-content 1fr;

  min-width: 100%;
  margin: 0.2rem;

  position: relative;

  @media only screen and (min-width: 768px) {
    --width: calc((98% / 2));
    max-width: var(--width);
    min-width: var(--width);
  }

  @media only screen and (min-width: 1024px) {
    --width: calc((98% / 3));
  }

  .menuNumber {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1rem 0 1rem;
    background-color: var(--color-quaternary);
    font-weight: bold;
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

const MealListItem = ({
  meal,
  isEditModeOn,
  setSelectedItem,
  toggleEditMode,
  deleteMeal,
}) => {
  return (
    <MealListItemContainer>
      <p className="menuNumber">{meal.menuNumber} </p>
      {renderIsChildMeal()}
      <p>Název: {meal.name}</p>
      <p>Alergeny: ({meal.alergens})</p>
      <p className="price">Cena: {meal.price},-</p>

      <div className="buttons">
        <Button primary onClick={handleEdit}>
          editovat{' '}
        </Button>
        <Button onClick={handleDelete}> smazat</Button>
      </div>
    </MealListItemContainer>
  );

  function renderIsChildMeal() {
    switch (meal.type) {
      case 'isChildMeal':
        return <p style={{ fontWeight: 'bold' }}>Dětské menu</p>;
      case 'isBreakfastMeal':
        return <p style={{ fontWeight: 'bold' }}>Snídaňové menu</p>;
      default:
        return <p style={{ fontWeight: 'bold' }}>Týdenní menu</p>;
    }
  }

  function handleEdit() {
    setSelectedItem(meal);
    toggleEditMode(true);

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
  toggleEditMode,
  deleteMeal,
})(MealListItem);
