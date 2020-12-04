import { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchMeals from '../../../../actions/meals/fetchMeals';

import Button from '../../Button';
import Label from '../../Label';
import MealsList from '../Lists/MealsList';
import SoupsList from '../Lists/SoupsList';
import Row from '../../Row';
import menuIcon from '../../../../img/menu-icon.png';
import InfoBox from '../InfoBox';

import MealsMenuContainer from '../MealsMenuContainer';
import MealsMenuContent from '../MealsMenuContent';

const WeeklyMenu = ({ fetchMeals, meals }) => {
  // useEffect(() => {
  //   fetchMeals();
  // }, [fetchMeals]);

  const weeklyData = {
    text:
      'Polední Menu se sklada z hlavního chodu a polévky a je možné si ho objednat předem k vyzvednutí na restauraci nebo rozvozem k Vám domů. Jídlo Vám rádi dovezeme domů vždy čerstvé. Objednejte si1',
  };

  const mealsData = [
    {
      id: 1,
      name: 'Smažený sýr, hranolky, tatarka',
      price: '99',
      alergens: '1,3,7,10',
    },
    {
      id: 2,
      name: 'Kuřecí roláda s bramborovou kaší',
      price: '99',
      alergens: '7',
    },
    {
      id: 3,
      name: 'Smažený vepřový řízek, domácí bramborový salát s majonézou',
      price: '109',
      alergens: '1, 3, 7, 10',
    },
    {
      id: 4,
      name: 'Vepřová plec se smetanovým špenátem a bramborovými šiškami',
      price: '109',
      alergens: '1, 7, 12',
    },
    {
      id: 5,
      name: 'Hovězí váleček na žampionech, rýže',
      price: '119',
      alergens: '1',
    },
    {
      id: 6,
      name: 'Obalovaný hejk s česnekovou omáčkou a bramborovou kaší',
      price: '119',
      alergens: '1, 3,4,7',
    },
    { id: 7, name: 'Flamendr, bramboráčky', price: '119', alergens: '1' },
    {
      id: 8,
      name: 'Steak z krkovice s bylinkovým máslem, hranolkami a tatarkou',
      price: '129',
      alergens: '7, 10',
    },
    {
      id: 9,
      name: 'alát s krůtími prsy, sypané parmazánem, bagetka',
      price: '129',
      alergens: '1, 4, 7',
    },
    {
      id: 10,
      name: 'Burger s vepřovým trhaným, volksým okem, hranolky',
      price: '129',
      alergens: '1, 3, 7, 10',
    },
    {
      id: 11,
      name: 'Hovězí líčka s kořenovou zeleninou a bramborovou kaší',
      price: '139',
      alergens: '1, 7, 9',
    },
  ];

  const childData = [
    {
      id: 1,
      name: 'Kuřecí stripsy, hranolky',
      price: '79',
      alergens: '1, 3, 7',
    },
    {
      id: 2,
      name: 'Kuřecí burger, čedar, okurek, kečup, hranolky',
      price: '79',
      alergens: '1, 7',
    },
  ];

  return (
    <MealsMenuContainer id="menu">
      <h1>Týdenní menu 11:00 – 16:00</h1>
      <p style={{ padding: '1rem 0rem' }}>{weeklyData.text}</p>
      <Row>
        <Label text={getDateText()} />
        <Button text="OBJEDNAT" />
      </Row>
      <MealsMenuContent>
        <div className="leftside">
          <MealsList header="Menu" info="" icon={menuIcon} items={mealsData} />
          <MealsList
            header="Dětské menu"
            info=""
            icon={menuIcon}
            items={childData}
          />
        </div>
        <div className="rightside">
          <SoupsList />
          <InfoBox time="8:00 – 10:30" text="" />
        </div>
      </MealsMenuContent>
    </MealsMenuContainer>
  );
};

function getDateText() {
  const curr = new Date();
  const first = curr.getDate() - curr.getDay() + 1;
  const last = first + 4;
  const monday = new Date(curr.setDate(first)).toLocaleDateString().slice(0, 7);
  const friday = new Date(curr.setDate(last)).toLocaleDateString();
  return `${monday} - ${friday}`;
}

function mapStateToProps(state, prevState) {
  const { meals } = state;
  return {
    meals,
  };
}
export default connect(mapStateToProps, { fetchMeals })(WeeklyMenu);
