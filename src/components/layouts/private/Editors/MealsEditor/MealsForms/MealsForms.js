import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Form from '../../../../../common/Forms/Form';
import FormGroup from '../../../../../common/Forms/FormGroup';
import Button from '../../../../../common/Button';

import createMeal from '../../../../../../redux/actions/data/meals/createMeal';
import editMeal from '../../../../../../redux/actions/data/meals/editMeal';
import updateMealBoxPrice from '../../../../../../redux/actions/data/boxPrices/updateMealBoxPrice';
import setSelectedItem from '../../../../../../redux/actions/editor/setSelectedItem';
import RadioGroup from '../../../../../common/Forms/RadioGroup';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { v4 as uuidv4 } from 'uuid';
import './styles/animations.css';

const MealForm = styled(Form)`
  .mealform__inputs {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(48%, 1fr));
    grid-column-gap: 1rem;
  }

  @media only screen and (min-width: 768px) {
    .mealform__inputs {
      grid-template-columns: repeat(auto-fill, minmax(24%, 1fr));
    }
  }
`;

const MealFormButtons = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
  }
`;

const MealsForms = ({
  createMeal,
  editMeal,
  isEditModeOn,
  setSelectedItem,
  selectedItem,
  updateMealBoxPrice,
  boxPrice,
}) => {
  const [name, setName] = useState('');
  const [alergens, setAlergens] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');
  const [menuNumber, setMenuNumber] = useState('');
  const [mealBoxPrice, setMealBoxPrice] = useState('');

  useEffect(() => {
    setMealBoxPrice(boxPrice);
  }, [boxPrice, setMealBoxPrice]);

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
      <div className="mealform__inputs">
        <FormGroup>
          <input
            type="text"
            placeholder="Alergeny"
            value={alergens}
            onChange={(event) => setAlergens(event.target.value)}
            id="alergenInput"
          />
          <label htmlFor="alergenInput">Alergeny</label>
        </FormGroup>
        <FormGroup>
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

        <FormGroup>
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

        <FormGroup>
          <input
            disabled={isEditModeOn}
            type="text"
            placeholder="Cena obalu"
            value={mealBoxPrice}
            onChange={(event) => setMealBoxPrice(event.target.value)}
            id="priceBoxInput"
            required
          />
          <label htmlFor="priceInput">Cena obalu</label>
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
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <MealFormButtons>
              <Button primary type="submit">
                Vytvořit
              </Button>
              <Button onClick={saveMealBoxPrice} primary>
                Uložit cenu obalu
              </Button>
            </MealFormButtons>
          </CSSTransition>
        </TransitionGroup>
      );
    }
  }

  function saveMealBoxPrice(event) {
    event.preventDefault();
    if (mealBoxPrice.length !== 0) {
      updateMealBoxPrice(mealBoxPrice);
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
        />
        <label htmlFor="weeklyId">Pokrm patří do týdenního menu</label>

        <input
          type="radio"
          value="isBreakfastMeal"
          name="mealType"
          id="breakfastId"
          checked={type === 'isBreakfastMeal'}
          onChange={(event) => setType(event.target.value)}
        />
        <label htmlFor="breakfastId">Pokrm patří do snídaňového menu</label>

        <input
          type="radio"
          value="isChildMeal"
          name="mealType"
          checked={type === 'isChildMeal'}
          onChange={(event) => setType(event.target.value)}
          id="childId"
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
    setType('');
  }
};

function mapStateToProps(state, ownProps) {
  return {
    isEditModeOn: state.editor.isEditModeOn,
    selectedItem: state.editor.selectedItem,
    boxPrice: state.data.boxPrices.mealBoxPrice,
  };
}

export default connect(mapStateToProps, {
  createMeal,
  editMeal,
  setSelectedItem,
  updateMealBoxPrice,
})(MealsForms);
