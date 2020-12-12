import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Form from '../../../common/Forms/Form';
import FormGroup from '../../../common/Forms/FormGroup';
import Button from '../../../../components/common/Button';

import editSoups from '../../../../redux/actions/soups/editSoups';

const SoupsForm = ({ editSoups, soups }) => {
  const [monday, setMonday] = useState(soups.monday);
  const [tuesday, setTuesday] = useState(soups.tuesday);
  const [wednesday, setWednesday] = useState(soups.wednesday);
  const [thursday, setThursday] = useState(soups.thursday);
  const [friday, setFriday] = useState(soups.friday);
  const [price, setPrice] = useState(soups.price);

  useEffect(() => {
    setMonday(soups.monday);
    setTuesday(soups.tuesday);
    setWednesday(soups.wednesday);
    setThursday(soups.thursday);
    setFriday(soups.friday);
    setPrice(soups.price);
  }, [soups]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <input
          type="text"
          placeholder="Pondělí"
          value={monday}
          onChange={(event) => setMonday(event.target.value)}
          id="mondayInput"
          required
        />
        <label htmlFor="mondayInput">Pondělí</label>
      </FormGroup>
      <FormGroup>
        <input
          type="text"
          placeholder="Úterý"
          value={tuesday}
          onChange={(event) => setTuesday(event.target.value)}
          id="tuesdayInput"
          required
        />
        <label htmlFor="tuesdayInput">Úterý</label>
      </FormGroup>

      <FormGroup>
        <input
          type="text"
          placeholder="Středa"
          value={wednesday}
          onChange={(event) => setWednesday(event.target.value)}
          id="wednesdayInput"
          required
        />
        <label htmlFor="wednesdayInput">Středa</label>
      </FormGroup>

      <FormGroup>
        <input
          type="text"
          placeholder="Čtvrtek"
          value={thursday}
          onChange={(event) => setThursday(event.target.value)}
          id="thursdayInput"
          required
        />
        <label htmlFor="nameIthursdayInputnput">Čtvrtek</label>
      </FormGroup>

      <FormGroup>
        <input
          type="text"
          placeholder="Pátek"
          value={friday}
          onChange={(event) => setFriday(event.target.value)}
          id="fridayInput"
          required
        />
        <label htmlFor="fridayInput">Pátek</label>
      </FormGroup>

      <FormGroup>
        <input
          type="text"
          placeholder="Jednotná cena"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          id="priceInput"
          required
        />
        <label htmlFor="priceInput">Jednotná cena</label>
      </FormGroup>
      <Button type="submit" text="aktualizovat" />
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const soups = {
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      price: price,
    };
    editSoups(soups);
  }
};

export default connect(null, {
  editSoups,
})(SoupsForm);
