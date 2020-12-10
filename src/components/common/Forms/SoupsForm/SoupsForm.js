import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Form from '../Form';
import FormGroup from '../FormGroup';
import Button from '../../Button';

import editSoups from '../../../../redux/actions/soups/editSoups';
import fetchSoups from '../../../../redux/actions/soups/fetchSoups';

const SoupsForm = ({ editSoups, fetchSoups }) => {
  const [monday, setMonday] = useState('');
  const [tuesday, setTuesday] = useState('');
  const [wednesday, setWednesday] = useState('');
  const [thursday, setThursday] = useState('');
  const [friday, setFriday] = useState('');
  const [price, setPrice] = useState('');
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
  }
};

function mapStateToProps(state, ownProps) {
  return {
    state,
  };
}

export default connect(mapStateToProps, {
  editSoups,
  fetchSoups,
})(SoupsForm);
