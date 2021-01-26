import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Form from '../../../common/Forms/Form';
import FormGroup from '../../../common/Forms/FormGroup';
import Button from '../../../common/Button';

import updateSoups from '../../../../redux/actions/data/soups/updateSoups';
import updateSoupBoxPrice from '../../../../redux/actions/data/boxPrices/updateSoupBoxPrice';

const SoupsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minMax(49%, 1fr));
  grid-gap: 1rem;
`;

const SoupsForm = ({ updateSoups, soups, boxPrice, updateSoupBoxPrice }) => {
  const [monday, setMonday] = useState({ name: '', alergens: [''] });
  const [tuesday, setTuesday] = useState({ name: '', alergens: [''] });
  const [wednesday, setWednesday] = useState({ name: '', alergens: [''] });
  const [thursday, setThursday] = useState({ name: '', alergens: [''] });
  const [friday, setFriday] = useState({ name: '', alergens: [''] });
  const [price, setPrice] = useState('');
  const [soupBoxPrice, setSoupBoxPrice] = useState('');

  useEffect(() => {
    if (Object.keys(soups).length > 0) {
      setMonday({
        name: soups.monday.name,
        alergens: soups.monday.alergens.join(' '),
      });
      setTuesday({
        name: soups.tuesday.name,
        alergens: soups.tuesday.alergens.join(' '),
      });
      setWednesday({
        name: soups.wednesday.name,
        alergens: soups.wednesday.alergens.join(' '),
      });
      setThursday({
        name: soups.thursday.name,
        alergens: soups.thursday.alergens.join(' '),
      });
      setFriday({
        name: soups.friday.name,
        alergens: soups.friday.alergens.join(' '),
      });
      setPrice(soups.price || '');
    }

    if (boxPrice) {
      setSoupBoxPrice(boxPrice);
    }
  }, [soups, boxPrice]);

  return (
    <Form onSubmit={handleSubmit}>
      <SoupsRow>
        <FormGroup>
          <input
            type="text"
            placeholder="Pondělí"
            value={monday.name}
            onChange={(event) => {
              setMonday({ ...monday, name: event.target.value });
            }}
            id="mondayInput"
          />
          <label htmlFor="mondayInput">Pondělí</label>
        </FormGroup>
        <FormGroup>
          <input
            type="text"
            placeholder="Alergeny"
            value={monday.alergens}
            onChange={(event) =>
              setMonday({ ...monday, alergens: event.target.value })
            }
            id="mondayAlergen"
          />
          <label htmlFor="mondayAlergen">Alergeny</label>
        </FormGroup>
      </SoupsRow>

      <SoupsRow>
        <FormGroup>
          <input
            type="text"
            placeholder="Úterý"
            value={tuesday.name}
            onChange={(event) =>
              setTuesday({ ...tuesday, name: event.target.value })
            }
            id="tuesdayInput"
          />
          <label htmlFor="tuesdayInput">Úterý</label>
        </FormGroup>
        <FormGroup>
          <input
            type="text"
            placeholder="Alergens"
            value={tuesday.alergens}
            onChange={(event) =>
              setTuesday({ ...tuesday, alergens: event.target.value })
            }
            id="tuesdayAlergens"
          />
          <label htmlFor="tuesdayAlergens">Alergens</label>
        </FormGroup>
      </SoupsRow>

      <SoupsRow>
        <FormGroup>
          <input
            type="text"
            placeholder="Středa"
            value={wednesday.name}
            onChange={(event) =>
              setWednesday({ ...wednesday, name: event.target.value })
            }
            id="wednesdayInput"
          />
          <label htmlFor="wednesdayInput">Středa</label>
        </FormGroup>
        <FormGroup>
          <input
            type="text"
            placeholder="Alergeny"
            value={wednesday.alergens}
            onChange={(event) =>
              setWednesday({ ...wednesday, alergens: event.target.value })
            }
            id="wednesdayAlergens"
          />
          <label htmlFor="wednesdayAlergens">Alergeny</label>
        </FormGroup>
      </SoupsRow>

      <SoupsRow>
        <FormGroup>
          <input
            type="text"
            placeholder="Čtvrtek"
            value={thursday.name}
            onChange={(event) =>
              setThursday({ ...thursday, name: event.target.value })
            }
            id="thursdayInput"
          />
          <label htmlFor="nameIthursdayInputnput">Čtvrtek</label>
        </FormGroup>
        <FormGroup>
          <input
            type="text"
            placeholder="Alergeny"
            value={thursday.alergens}
            onChange={(event) =>
              setThursday({ ...thursday, alergens: event.target.value })
            }
            id="thursdayAlergens"
          />
          <label htmlFor="thursdayAlergens">Alergeny</label>
        </FormGroup>
      </SoupsRow>

      <SoupsRow>
        <FormGroup>
          <input
            type="text"
            placeholder="Pátek"
            value={friday.name}
            onChange={(event) =>
              setFriday({ ...friday, name: event.target.value })
            }
            id="fridayInput"
          />
          <label htmlFor="fridayInput">Pátek</label>
        </FormGroup>
        <FormGroup>
          <input
            type="text"
            placeholder="Úterý"
            value={friday.alergens}
            onChange={(event) =>
              setFriday({ ...friday, alergens: event.target.value })
            }
            id="fridayAlergens"
          />
          <label htmlFor="fridayAlergens">Alergeny</label>
        </FormGroup>
      </SoupsRow>

      <SoupsRow>
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
      </SoupsRow>

      <Button primary type="submit">
        aktualizovat
      </Button>
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();

    const soups = {
      monday: { name: monday.name, alergens: hasMoreThanOne(monday.alergens) },
      tuesday: {
        name: tuesday.name,
        alergens: hasMoreThanOne(tuesday.alergens),
      },
      wednesday: {
        name: wednesday.name,
        alergens: hasMoreThanOne(wednesday.alergens),
      },
      thursday: {
        name: thursday.name,
        alergens: hasMoreThanOne(thursday.alergens),
      },
      friday: { name: friday.name, alergens: hasMoreThanOne(friday.alergens) },
      price: price,
    };
    if (soups) {
      updateSoups(soups);
    }

    updateSoupBoxPrice(soupBoxPrice);
  }

  function hasMoreThanOne(alergens) {
    if (alergens[0] === '') {
      return alergens;
    } else {
      return alergens.split(' ');
    }
  }
};

export default connect(null, {
  updateSoups,
  updateSoupBoxPrice,
})(SoupsForm);
