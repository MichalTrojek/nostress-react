import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Form from '../Form';
import FormGroup from '../FormGroup';
import Button from '../../Button';

import createMeal from '../../../../redux/actions/meals/createMeal';
import editMeal from '../../../../redux/actions/meals/editMeal';
import toggleEditMode from '../../../../redux/actions/editor/toggleEditMode';
import setSelectedItem from '../../../../redux/actions/editor/setSelectedItem';

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
  const [isChildMeal, setIsChildMeal] = useState(false);

  useEffect(() => {
    console.log(isChildMeal);
    if (isEditModeOn) {
      setName(selectedItem.name);
      setAlergens(selectedItem.alergens);
      setPrice(selectedItem.price);
    }
  }, [isEditModeOn, selectedItem, isChildMeal]);

  return (
    <Form onSubmit={handleSubmit}>
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
          placeholder="Cena"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          id="priceInput"
          required
        />
        <label htmlFor="priceInput">Cena</label>
      </FormGroup>
      <div className="checkbox">
        <input
          id="childmealInput"
          type="checkbox"
          onChange={(event) => setIsChildMeal(event.target.checked)}
          value={isChildMeal}
        />
        <label htmlFor="childmealInput">Dětské menu</label>
      </div>

      {renderButtons()}
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    if (name.length !== 0 && price.length !== 0) {
      let meal = { name, alergens, price, isChildMeal };
      if (isEditModeOn) {
        editMeal(selectedItem.id, name, alergens, price, isChildMeal);
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
          <Button type="submit" text="změnit" />
          <Button type="reset" onClick={handleCancel} text="zrušit" />
        </div>
      );
    } else {
      return <Button type="submit" text="Vytvořit"></Button>;
    }
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
