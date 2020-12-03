import { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchMeals from '../../../actions/meals/fetchMeals';

import Button from '../Button';
import styled from 'styled-components';
import Label from '../Label';
import MealsList from '../MealsList';
import Row from '../Row';
import menuIcon from '../../../img/menu-icon.png';

const MealsDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media only screen and (min-width: 320px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 360px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 411px) {
    font-size: 1.6rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.9rem;
  }
`;

const Meals = ({ fetchMeals, meals }) => {
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
    <>
      <h1>Týdenní menu</h1>
      <p style={{ padding: '1rem 0rem' }}>{weeklyData.text}</p>
      <MealsDateContainer>
        <Row>
          <Label text={getDateText()} />
          <Button text="OBJEDNAT" />
        </Row>
        <MealsList
          header="Menu"
          info="sleva"
          icon={menuIcon}
          items={mealsData}
        />
        <MealsList
          header="Dětské menu"
          info="sleva"
          icon={menuIcon}
          items={childData}
        />
      </MealsDateContainer>
    </>
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
export default connect(mapStateToProps, { fetchMeals })(Meals);
