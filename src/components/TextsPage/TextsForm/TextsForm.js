import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Form from '../../common/Forms/Form';
import FormGroup from '../../common/Forms/FormGroup';
import Button from '../../common/Button';

import updateTexts from '../../../redux/actions/data/texts/updateTexts';

const SoupsForm = ({ updateTexts }) => {
  const [mmHeading, setMmHeading] = useState('');
  const [mmMainText, setMmMainText] = useState('');
  const [mmDateText, setMmDateText] = useState('');
  const [mmMenuInfoText, setMmMenuInfoText] = useState('');
  const [mmMainChildMenuInfoText, setMmChildMenuInfoText] = useState('');

  return (
    <Form onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: '2.5rem' }}>Hlavní menu</h2>
      <FormGroup>
        <input
          type="text"
          placeholder="Nadpis"
          value={mmHeading}
          onChange={(event) => setMmHeading(event.target.value)}
          id="mondayInput"
        />
        <label htmlFor="mondayInput">Nadpis</label>
      </FormGroup>
      <FormGroup>
        <input
          type="text"
          placeholder="Hlavní text"
          value={mmMainText}
          onChange={(event) => setMmMainText(event.target.value)}
          id="mondayInput"
        />
        <label htmlFor="mondayInput">Hlavni text</label>
      </FormGroup>
      <FormGroup>
        <input
          type="text"
          placeholder="Datum / Text"
          value={mmDateText}
          onChange={(event) => setMmDateText(event.target.value)}
          id="mondayInput"
        />
        <label htmlFor="mondayInput">Datum / Text</label>
      </FormGroup>
      <FormGroup>
        <input
          type="text"
          placeholder="Menu - info"
          value={mmMenuInfoText}
          onChange={(event) => setMmMenuInfoText(event.target.value)}
          id="mondayInput"
        />
        <label htmlFor="mondayInput">Menu - info</label>
      </FormGroup>
      <FormGroup>
        <input
          type="text"
          placeholder="Dětské menu - info"
          value={mmMainChildMenuInfoText}
          onChange={(event) => setMmChildMenuInfoText(event.target.value)}
          id="mondayInput"
        />
        <label htmlFor="mondayInput">Dětské menu - info</label>
      </FormGroup>

      <Button primary type="submit">
        aktualizovat
      </Button>
    </Form>
  );

  function handleSubmit(event) {
    event.preventDefault();

    const texts = {
      mainMenu: {
        heading: mmHeading,
        mainText: mmMainText,
        dateText: mmDateText,
        menuInfoText: mmMenuInfoText,
        childMenuInfoText: mmMainChildMenuInfoText,
      },
    };

    updateTexts(texts);
  }
};

export default connect(null, { updateTexts })(SoupsForm);
