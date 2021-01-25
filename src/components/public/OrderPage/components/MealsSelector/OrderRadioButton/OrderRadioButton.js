import { useState } from 'react';
import styled from 'styled-components';
import RadioGroup from '../../../../../common/Forms/RadioGroup';
import { connect } from 'react-redux';

const RadioGroupOrderMenu = styled(RadioGroup)`
  padding-bottom: 0;
  label {
    margin-bottom: 0;
    border-radius: 0;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    padding: 0.1rem 0;
    border: 1px solid var(--color-tertiary);
    @media only screen and (min-width: 931px) {
      width: 50%;
    }
  }
`;

const OrderRadioButton = () => {
  const [menu, setMenu] = useState('mainMenu');

  return (
    <RadioGroupOrderMenu>
      <input
        id="mainMenu"
        type="radio"
        value={'mainMenu'}
        name="deliveryGroup"
        checked={menu === 'mainMenu'}
        onChange={(event) => setMenu(event.target.value)}
      />
      <label htmlFor="mainMenu">Hlavní menu</label>
      <input
        id="breakfastMenu"
        type="radio"
        value={'breakfastMenu'}
        name="deliveryGroup"
        checked={menu === 'breakfastMenu'}
        onChange={(event) => setMenu(event.target.value)}
      />
      <label htmlFor="breakfastMenu">Snídaně</label>
    </RadioGroupOrderMenu>
  );
};

export default connect()(OrderRadioButton);