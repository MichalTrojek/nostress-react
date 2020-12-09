import { useState } from 'react';
import Form from '../Form';
import FormGroup from '../FormGroup';
import Button from '../../Button';

const MealsForms = () => {
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
    console.log(`${name}  ${price} ${alergens}`);
  }
};

export default MealsForms;
