import { useState } from 'react';
import styled from 'styled-components';
import RadioGroup from '../../../../../common/Forms/RadioGroup';
import { connect } from 'react-redux';

import { BreakfastMenu, MainMenu } from '../../../../../../utils/constant';

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

const OrderRadioButton = ({ orderingStarted }) => {
  const [menu, setMenu] = useState(orderingStarted.menuType);

  return (
    <RadioGroupOrderMenu>
      <input
        id="mainMenu"
        type="radio"
        value={MainMenu}
        name="deliveryGroup"
        checked={menu === MainMenu}
        onChange={(event) => setMenu(event.target.value)}
      />
      <label htmlFor="mainMenu">Hlavní menu</label>
      <input
        id="breakfastMenu"
        type="radio"
        value={BreakfastMenu}
        name="deliveryGroup"
        checked={menu === BreakfastMenu}
        onChange={(event) => setMenu(event.target.value)}
      />
      <label htmlFor="breakfastMenu">Snídaně</label>
    </RadioGroupOrderMenu>
  );
};

export default connect()(OrderRadioButton);
