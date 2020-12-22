import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Form from '../../../common/Forms/Form';
import FormGroup from '../../../common/Forms/FormGroup';
import Button from '../../../common/Button';

import createMeal from '../../../../redux/actions/meals/createMeal';
import editMeal from '../../../../redux/actions/meals/editMeal';
import toggleEditMode from '../../../../redux/actions/editor/toggleEditMode';
import setSelectedItem from '../../../../redux/actions/editor/setSelectedItem';
import RadioGroup from '../../../common/Forms/RadioGroup';

const MealForm = styled(Form)`
  @media only screen and (min-width: 1024px) {
    .inputs {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 1rem;
      .alergens {
        grid-column: 1 / span 1;
      }

      .menuNumber {
        grid-column: 2 / span 1;
      }

      .price {
        grid-column: 3 / span 1;
      }
    }
  }
`;

const MealsForms = ({
  createMeal,
  editMeal,
  isEditModeOn,
  toggleEditMode,
  setSelectedItem,
  selectedItem,
}) => {
  const [name, setName] = useState('');
  const [alergens, setAlergens] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('isWeeklyMeal');
  const [menuNumber, setMenuNumber] = useState('');

  useEffect(() => {
    if (isEditModeOn) {
      setName(selectedItem.name);
      setAlergens(selectedItem.alergens);
      setPrice(selectedItem.price);
      setType(selectedItem.type);
      setType(selectedItem.menuNumber);
    }
  }, [isEditModeOn, selectedItem]);

  return (
    <MealForm onSubmit={handleSubmit}>
      <FormGroup>
        <input
          type="text"
          placeholder="Název"
          value={name}
          onChange={(event) => setName(event.target.value)}
          id="nameInput"
          required
        />
        <label htmlFor="nameInput">Název</label>
      </FormGroup>
      <div className="inputs">
        <FormGroup className="alergens">
          <input
            type="text"
            placeholder="Alergeny"
            value={alergens}
            onChange={(event) => setAlergens(event.target.value)}
            id="alergenInput"
          />
          <label htmlFor="alergenInput">Alergeny</label>
        </FormGroup>

        <FormGroup className="menuNumber">
          <input
            type="text"
            placeholder="Číslo menu"
            value={menuNumber}
            onChange={(event) => setMenuNumber(event.target.value)}
            id="menuNumberInput"
          />
          <label htmlFor="menuNumberInput">Číslo menu</label>
        </FormGroup>

        <FormGroup className="price">
          <input
            type="text"
            placeholder="Cena"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            id="priceInput"
            required
          />
          <label htmlFor="priceInput">Cena</label>
        </FormGroup>
      </div>
      {renderRadioGroup()}
      {renderButtons()}
    </MealForm>
  );

  function handleSubmit(event) {
    event.preventDefault();
    if (name.length !== 0 && price.length !== 0) {
      let meal = { name, alergens, price, type, menuNumber };
      if (isEditModeOn) {
        editMeal({
          id: selectedItem.id,
          name,
          alergens,
          price,
          type,
          menuNumber,
        });
        handleCancel();
      } else {
        createMeal(meal);
        clearStates();
      }
    }
  }

  function renderButtons() {
    if (isEditModeOn) {
      return (
        <div className="buttons">
          <Button primary type="submit">
            změnit
          </Button>
          <Button primary type="reset" onClick={handleCancel}>
            zrušit
          </Button>
        </div>
      );
    } else {
      return (
        <Button primary type="submit">
          Vytvořit
        </Button>
      );
    }
  }

  function renderRadioGroup() {
    return (
      <RadioGroup>
        <label>
          <input
            type="radio"
            value="isWeeklyMeal"
            name="mealType"
            checked={type === 'isWeeklyMeal'}
            onChange={(event) => setType(event.target.value)}
          />
          Pokrm patří do týdenního menu
        </label>
        <label>
          <input
            type="radio"
            value="isBreakfastMeal"
            name="mealType"
            checked={type === 'isBreakfastMeal'}
            onChange={(event) => setType(event.target.value)}
          />
          Pokrm patří do snídaňového menu
        </label>
        <label>
          <input
            type="radio"
            value="isChildMeal"
            name="mealType"
            checked={type === 'isChildMeal'}
            onChange={(event) => setType(event.target.value)}
          />
          Pokrm patří do dětského menu
        </label>
      </RadioGroup>
    );
  }

  function handleCancel() {
    toggleEditMode(false);
    setSelectedItem(null);
    clearStates();
  }

  function clearStates() {
    setName('');
    setAlergens('');
    setPrice('');
    setType('isWeeklyMeal');
  }
};

function mapStateToProps(state, ownProps) {
  return {
    isEditModeOn: state.editor.isEditModeOn,
    selectedItem: state.editor.selectedItem,
  };
}

export default connect(mapStateToProps, {
  createMeal,
  editMeal,
  toggleEditMode,
  setSelectedItem,
})(MealsForms);
