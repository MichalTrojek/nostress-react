import styled from 'styled-components';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchMeals from '../../../../api/meals/fetchMealsApiCall';

import Button from '../../../common/Button';
import Label from '../../../common/Label';

import MealsList from '../Lists/MealsList';

import menuIcon from '../../../../img/menu-icon.png';
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

const BreakFastMenu = ({ fetchMeals, meals }) => {
  // useEffect(() => {
  //   fetchMeals();
  // }, [fetchMeals]);

  const weeklyData = {
    text:
      'Nově nabízíme výborné snídaně nebo svačiny za super ceny. K dispozici také na objednání rozvozu až domů nebo „take away“ z výdejního okénka. Objednej si domů nebo do kanceláře čerstvou snídani nebo svačinu!',
  };

  const mealsData = [
    {
      id: 1,
      name: 'Toust se slaninou, volským okem, zapečený čedarem',
      price: '79',
      alergens: '1,3,10',
    },
    {
      id: 2,
      name: 'Quesadilla s vejci, slaninou, zapečená sýrem ',
      price: '89',
      alergens: '1, 3, 7',
    },
    {
      id: 3,
      name:
        'Sedlácký chléb, pečínkové sádlo se škvarky, plátky pečeného kolínka, sterilovaný okurek, červená cibule',
      price: '89',
      alergens: '1',
    },
    {
      id: 4,
      name: 'Fresh chléb, pomazánka z avokáda, vejce na tvrdo, ředkvičky',
      price: '89',
      alergens: '1',
    },
    {
      id: 5,
      name: 'Bageta s plátky grilované krkovičky, dresing, zelenina ',
      price: '1',
      alergens: '1',
    },
  ];

  return (
    <MealsMenuContainer>
      <h1>Snídaňové menu 8:00 – 10:30</h1>
      <p style={{ padding: '1rem 0rem' }}>{weeklyData.text}</p>
      <BreakFastRow>
        <Label text="KÁVA ZDARMA ke každé snídani" />
        <Button text="OBJEDNAT SNÍDANI" />
      </BreakFastRow>
      <MealsMenuContent>
        <div className="leftside">
          <MealsList
            header="Nabídka"
            info="ZAVÁDĚCÍ CENY"
            icon={menuIcon}
            items={mealsData}
          />
        </div>
        <div className="rightside-breakfast">
          <InfoBox time="11:00 – 16:00" text="V sobotu speciální menu" />
        </div>
      </MealsMenuContent>
    </MealsMenuContainer>
  );
};

function mapStateToProps(state, prevState) {
  const { meals } = state;
  return {
    meals,
  };
}

export default connect(mapStateToProps, { fetchMeals })(BreakFastMenu);
