import { useState } from 'react';
import { connect } from 'react-redux';

import Form from '../Form';
import FormGroup from '../FormGroup';
import Button from '../../Button';
import createMeal from '../../../../redux/actions/meals/createMeal';

const MealsForms = ({ createMeal }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [alergens, setAlergens] = useState('');

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup type="text" placeholder="Název" getValue={setName} />
      <FormGroup type="text" placeholder="Alergeny" getValue={setAlergens} />
      <FormGroup type="text" placeholder="Cena" getValue={setPrice} />
      <Button text="Vytvořit"></Button>
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    if (name.length !== 0 && price.length !== 0 && alergens.length !== 0) {
      createMeal({ name: name, price: price, alergens: alergens });
    }
  }
};

export default connect(null, { createMeal })(MealsForms);
