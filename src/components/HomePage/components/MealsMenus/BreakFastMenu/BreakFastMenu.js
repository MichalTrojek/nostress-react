import styled from 'styled-components';

import Button from '../../../../common/Button';
import Label from '../../../../common/Label';

import MealsList from '../Lists/MenuMealsList';

import menuIcon from '../../../../../img/menu-icon.png';
import InfoBox from '../InfoBox';

import MealsMenuContainer from '../MealsMenuContainer';
import MealsMenuContent from '../MealsMenuContent';

import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import startOrdering from '../../../../OrderingSystem/redux/actions/startOrdering';

const BreakFastRow = styled.div`
  display: flex;
  flex-direction: column;

  Button {
    margin-top: 1rem;
  }

  @media only screen and (min-width: 627px) {
    flex-direction: row;
    justify-content: space-between;
    Button {
      margin-top: 0;
    }
  }
`;

const BreakFastMenuContainer = styled(MealsMenuContainer)`
  padding: 1% 1rem;
`;

const BreakFastMenu = ({ breakfast, startOrdering, texts }) => {
  const history = useHistory();

  return (
    <BreakFastMenuContainer id="Breakfastmenu">
      <h1 className="menu__header">{texts.heading}</h1>
      <p className="menu__text">{texts.mainText}</p>
      <BreakFastRow>
        <Label text={texts.dateText} />
        <Button primary onClick={handleStartingOrder}>
          Objednat snídani
        </Button>
      </BreakFastRow>
      <MealsMenuContent>
        <div className="leftside">
          <MealsList
            header="Nabídka"
            info={texts.menuInfoText}
            icon={menuIcon}
            items={breakfast}
          />
        </div>
        <div className="rightside-breakfast">
          <InfoBox time={texts.deliveryTime} text="V sobotu speciální menu" />
        </div>
      </MealsMenuContent>
    </BreakFastMenuContainer>
  );

  function handleStartingOrder() {
    window.scrollTo(0, 0);
    history.push('/order');
    startOrdering({ status: true, menuType: 'BreakfastMenu' });
  }
};

export default connect(null, { startOrdering })(BreakFastMenu);
