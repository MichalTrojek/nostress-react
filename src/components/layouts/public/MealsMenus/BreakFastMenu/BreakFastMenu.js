import styled from 'styled-components';

import BreakfastOrderButton from '../../../../common/BreakfastOrderButton';
import Label from '../../../../common/Label';

import MealsList from '../Lists/MenuMealsList';

import menuIcon from '../../../../../img/menu-icon.png';
import InfoBox from '../InfoBox';

import MealsMenuContainer from '../MealsMenuContainer';
import MealsMenuContent from '../MealsMenuContent';

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
  padding-bottom: 3rem;
`;

const BreakFastMenu = ({ breakfast }) => {
  const weeklyData = {
    text:
      'Nově nabízíme výborné snídaně nebo svačiny za super ceny. K dispozici také na objednání rozvozu až domů nebo „take away“ z výdejního okénka. Objednej si domů nebo do kanceláře čerstvou snídani nebo svačinu!',
  };

  return (
    <BreakFastMenuContainer>
      <h1>Snídaňové menu 8:00 – 10:30</h1>
      <p style={{ padding: '1rem 0rem' }}>{weeklyData.text}</p>
      <BreakFastRow>
        <Label text="KÁVA ZDARMA ke každé snídani" />
        <BreakfastOrderButton />
      </BreakFastRow>
      <MealsMenuContent>
        <div className="leftside">
          <MealsList
            header="Nabídka"
            info="ZAVÁDĚCÍ CENY"
            icon={menuIcon}
            items={breakfast}
          />
        </div>
        <div className="rightside-breakfast">
          <InfoBox time="11:00 – 16:00" text="V sobotu speciální menu" />
        </div>
      </MealsMenuContent>
    </BreakFastMenuContainer>
  );
};

export default BreakFastMenu;
