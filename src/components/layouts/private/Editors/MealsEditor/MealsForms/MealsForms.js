import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Form from '../../../../../common/Forms/Form';
import FormGroup from '../../../../../common/Forms/FormGroup';
import Button from '../../../../../common/Button';

import createMeal from '../../../../../../redux/actions/data/meals/createMeal';
import editMeal from '../../../../../../redux/actions/data/meals/editMeal';
import setSelectedItem from '../../../../../../redux/actions/editor/setSelectedItem';
import RadioGroup from '../../../../../common/Forms/RadioGroup';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { v4 as uuidv4 } from 'uuid';
import './styles/animations.css';

const MealForm = styled(Form)`
  .createMealButton {
    width: 100%;
  }
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

const MealFormButtons = styled.div`
  display: flex;
  justify-content: center;
  Button {
    width: 50%;
  }

  Button:first-child {
    margin-right: 0.5rem;
  }

  Button:last-child {
    margin-left: 0.5rem;
  }
`;

const MealsForms = ({
  createMeal,
  editMeal,
  isEditModeOn,
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
      setMenuNumber(selectedItem.menuNumber);
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
            required
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

  function renderButtons() {
    if (isEditModeOn) {
      return (
        <TransitionGroup component={MealFormButtons}>
          <CSSTransition
            key="changeBtnKey"
            in={isEditModeOn}
            timeout={300}
            classNames="slideFromLeft"
            unmountOnExit
          >
            <Button primary type="submit">
              změnit
            </Button>
          </CSSTransition>
          <CSSTransition
            key="resetBtnKey"
            in={isEditModeOn}
            timeout={300}
            classNames="slideFromRight"
            unmountOnExit
          >
            <Button primary type="reset" onClick={handleCancel}>
              zrušit
            </Button>
          </CSSTransition>
        </TransitionGroup>
      );
    } else {
      return (
        <TransitionGroup component={null}>
          <CSSTransition
            key="createBtnKey"
            in={!isEditModeOn}
            timeout={900}
            classNames="fade"
            unmountOnExit
          >
            <Button className="createMealButton" primary type="submit">
              Vytvořit
            </Button>
          </CSSTransition>
        </TransitionGroup>
      );
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (name.length !== 0 && price.length !== 0 && menuNumber.length !== 0) {
      let meal = {
        id: uuidv4(),
        name,
        alergens,
        price,
        type,
        menuNumber,
        selectedItemType: 'meal',
      };

      if (isEditModeOn) {
        editMeal({
          ...meal,
          id: selectedItem.id,
        });
        handleCancel();
      } else {
        createMeal(meal);
        clearStates();
      }
    }
  }

  function renderRadioGroup() {
    return (
      <RadioGroup className="animate__backInRight">
        <input
          type="radio"
          value="isWeeklyMeal"
          name="mealType"
          id="weeklyId"
          checked={type === 'isWeeklyMeal'}
          onChange={(event) => setType(event.target.value)}
          disabled={!isEditModeOn}
        />
        <label htmlFor="weeklyId">Pokrm patří do týdenního menu</label>

        <input
          type="radio"
          value="isBreakfastMeal"
          name="mealType"
          id="breakfastId"
          checked={type === 'isBreakfastMeal'}
          onChange={(event) => setType(event.target.value)}
          disabled={!isEditModeOn}
        />
        <label htmlFor="breakfastId">Pokrm patří do snídaňového menu</label>

        <input
          type="radio"
          value="isChildMeal"
          name="mealType"
          checked={type === 'isChildMeal'}
          onChange={(event) => setType(event.target.value)}
          id="childId"
          disabled={!isEditModeOn}
        />
        <label htmlFor="childId">Pokrm patří do dětského menu</label>
      </RadioGroup>
    );
  }

  function handleCancel() {
    setSelectedItem(null);
    clearStates();
  }

  function clearStates() {
    setName('');
    setAlergens('');
    setPrice('');
    setMenuNumber('');
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
  setSelectedItem,
})(MealsForms);
