import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import selectMenu from '../../../../../redux/actions/orders/selectMenu';

import Button from '../../../../common/Button';

const OrderSelectorContainer = styled.div`
  .buttons {
    display: flex;
    flex-direction: column;
    Button {
      margin-top: 1rem;
    }
    @media only screen and (min-width: 411px) {
      flex-direction: row;
      justify-content: center;

      Button {
        margin-left: 1rem;
        margin-right: 1rem;
      }
    }
  }

  h2 {
    padding-top: 1rem;
    text-align: center;
  }
`;

const OrderSelector = ({ selectMenu }) => {
  const [isMainMenu, setIsMainMenu] = useState(true); // true = main menu, false = breakfast menu

  useEffect(() => {
    selectMenu(isMainMenu);
  }, [isMainMenu]);

  return (
    <OrderSelectorContainer>
      <div className="buttons">
        <Button primary onClick={() => handleSelectMenu(true)}>
          Týdenní menu
        </Button>
        <Button primary onClick={() => handleSelectMenu(false)}>
          Snídaně
        </Button>
      </div>
      {isMainMenu ? (
        <h2>Týdenní menu – 11:00 – 16:00</h2>
      ) : (
        <h2>Snídaně – 8:00 – 10:30</h2>
      )}
    </OrderSelectorContainer>
  );

  function handleSelectMenu(bool) {
    setIsMainMenu(bool);
  }
};

export default connect(null, { selectMenu })(OrderSelector);
