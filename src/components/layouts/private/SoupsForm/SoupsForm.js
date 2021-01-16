import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Form from '../../../common/Forms/Form';
import FormGroup from '../../../common/Forms/FormGroup';
import Button from '../../../../components/common/Button';

import updateSoups from '../../../../redux/actions/data/soups/updateSoups';
import updateSoupBoxPrice from '../../../../redux/actions/data/boxPrices/updateSoupBoxPrice';

const SoupsForm = ({ updateSoups, soups, boxPrice, updateSoupBoxPrice }) => {
  const [monday, setMonday] = useState('');
  const [tuesday, setTuesday] = useState('');
  const [wednesday, setWednesday] = useState('');
  const [thursday, setThursday] = useState('');
  const [friday, setFriday] = useState('');
  const [price, setPrice] = useState('');
  const [soupBoxPrice, setSoupBoxPrice] = useState('');

  useEffect(() => {
    if (soups) {
      setMonday(soups.monday);
      setTuesday(soups.tuesday);
      setWednesday(soups.wednesday);
      setThursday(soups.thursday);
      setFriday(soups.friday);
      setPrice(soups.price);
    }

    if (boxPrice) {
      setSoupBoxPrice(boxPrice);
    }
  }, [soups, boxPrice]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <input
          type="text"
          placeholder="Pondělí"
          value={monday}
          onChange={(event) => setMonday(event.target.value)}
          id="mondayInput"
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
        />
        <label htmlFor="priceInput">Jednotná cena</label>
      </FormGroup>
      <FormGroup>
        <input
          type="text"
          placeholder="Cena obalu"
          value={soupBoxPrice}
          onChange={(event) => setSoupBoxPrice(event.target.value)}
          id="soupBoxInput"
        />
        <label htmlFor="soupBoxInput">Cena obalu</label>
      </FormGroup>
      <Button primary type="submit">
        aktualizovat
      </Button>
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
    if (soups) {
      updateSoups(soups);
    }

    updateSoupBoxPrice(soupBoxPrice);
  }
};

export default connect(null, {
  updateSoups,
  updateSoupBoxPrice,
})(SoupsForm);
