import { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchMeals from '../../../../redux/actions/meals/fetchMeals';

import Button from '../../../common/Button';
import Label from '../../../common/Label';
import Row from '../../../common/Row';

import MealsList from '../Lists/MealsList';
import SoupsList from '../Lists/SoupsList';

import menuIcon from '../../../../img/menu-icon.png';
import InfoBox from '../InfoBox';

import MealsMenuContainer from '../MealsMenuContainer';
import MealsMenuContent from '../MealsMenuContent';

const WeeklyMenu = ({ fetchMeals, meals }) => {
  useEffect(() => {
    if (meals.length === 0) {
      fetchMeals();
    }
  }, [fetchMeals, meals.length]);

  const weeklyData = {
    text:
      'Polední Menu se sklada z hlavního chodu a polévky a je možné si ho objednat předem k vyzvednutí na restauraci nebo rozvozem k Vám domů. Jídlo Vám rádi dovezeme domů vždy čerstvé. Objednejte si1',
  };

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
          <MealsList header="Menu" info="" icon={menuIcon} items={meals} />
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
