import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Form from '../../../common/Forms/Form';
import FormGroup from '../../../common/Forms/FormGroup';
import Button from '../../../common/Button';

import updateHours from '../../../../redux/actions/data/hours/updateHours';

const BussinessHoursForm = ({ hours, updateHours }) => {
  const [monday, setMonday] = useState('');
  const [tuesday, setTuesday] = useState('');
  const [wednesday, setWednesday] = useState('');
  const [thursday, setThursday] = useState('');
  const [friday, setFriday] = useState('');
  const [saturday, setSaturday] = useState('');
  const [sunday, setSunday] = useState('');

  useEffect(() => {
    if (hours) {
      setMonday(hours.monday);
      setTuesday(hours.tuesday);
      setWednesday(hours.wednesday);
      setThursday(hours.thursday);
      setFriday(hours.friday);
      setSaturday(hours.saturday);
      setSunday(hours.sunday);
    }
  }, [hours]);

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
          placeholder="Sobota"
          value={saturday}
          onChange={(event) => setSaturday(event.target.value)}
          id="saturdayInput"
        />
        <label htmlFor="saturdayInput">Sobota</label>
      </FormGroup>
      <FormGroup>
        <input
          type="text"
          placeholder="Neděle"
          value={sunday}
          onChange={(event) => setSunday(event.target.value)}
          id="sundayInput"
        />
        <label htmlFor="sundayInput">Neděle</label>
      </FormGroup>
      <Button primary type="submit">
        aktualizovat
      </Button>
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const hours = {
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      saturday: saturday,
      sunday: sunday,
    };
    updateHours(hours);
  }
};

export default connect(null, { updateHours })(BussinessHoursForm);
