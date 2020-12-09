import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Form from '../Form';
import FormGroup from '../FormGroup';
import Button from '../../Button';

import createMeal from '../../../../redux/actions/meals/createMeal';
import toggleEditMode from '../../../../redux/actions/editor/toggleEditMode';
import setSelectedItem from '../../../../redux/actions/editor/setSelectedItem';

const MealsForms = ({
  createMeal,
  isEditModeOn,
  toggleEditMode,
  setSelectedItem,
}) => {
  const [name, setName] = useState('');
  const [alergens, setAlergens] = useState('');
  const [price, setPrice] = useState('');

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup
        name="name"
        type="text"
        placeholder="Název"
        sendValueToParent={setName}
      />
      <FormGroup
        name="alergens"
        type="text"
        placeholder="Alergeny"
        sendValueToParent={setAlergens}
      />
      <FormGroup
        name="price"
        type="text"
        placeholder="Cena"
        sendValueToParent={setPrice}
      />
      {renderButtons()}
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    if (name.length !== 0 && price.length !== 0) {
      createMeal({ name: name, price: price, alergens: alergens });
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
  toggleEditMode,
  setSelectedItem,
})(MealsForms);
