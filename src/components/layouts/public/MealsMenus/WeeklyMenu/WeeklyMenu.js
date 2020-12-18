import Button from '../../../../common/Button';
import Label from '../../../../common/Label';
import Row from '../../../../common/Row';

import MenuMealsList from '../Lists/MenuMealsList';
import MenuSoupsList from '../Lists/MenuSoupsList';

import menuIcon from '../../../../../img/menu-icon.png';
import InfoBox from '../InfoBox';

import MealsMenuContainer from '../MealsMenuContainer';
import MealsMenuContent from '../MealsMenuContent';

import { connect } from 'react-redux';
import startOrdering from '../../../../../redux/actions/orders/startOrdering';

import { useHistory } from 'react-router-dom';

const WeeklyMenu = ({ meals, childMeals, startOrdering }) => {
  const history = useHistory();

  const weeklyData = {
    text:
      'Polední Menu se sklada z hlavního chodu a polévky a je možné si ho objednat předem k vyzvednutí na restauraci nebo rozvozem k Vám domů. Jídlo Vám rádi dovezeme domů vždy čerstvé. Objednejte si1',
  };

  return (
    <MealsMenuContainer id="menu">
      <h1>Týdenní menu 11:00 – 16:00</h1>
      <p style={{ padding: '1rem 0rem' }}>{weeklyData.text}</p>
      <Row>
        <Label text={getDateText()} />
        <Button primary onClick={handleStartingOrder}>
          Objednat
        </Button>
      </Row>
      <MealsMenuContent>
        <div className="leftside">
          <MenuMealsList header="Menu" info="" icon={menuIcon} items={meals} />
          <MenuMealsList
            header="Dětské menu"
            info=""
            icon={menuIcon}
            items={childMeals}
          />
        </div>
        <div className="rightside">
          <MenuSoupsList />
          <InfoBox time="8:00 – 10:30" text="" />
        </div>
      </MealsMenuContent>
    </MealsMenuContainer>
  );

  function handleStartingOrder() {
    console.log('clicked');
    window.scrollTo(0, 0);
    history.push('/order');
    startOrdering({ status: true, orderType: 'MainMenu' });
  }
};

function getDateText() {
  const curr = new Date();
  const first = curr.getDate() - curr.getDay() + 1;
  const last = first + 4;
  const monday = new Date(curr.setDate(first)).toLocaleDateString().slice(0, 7);
  const friday = new Date(curr.setDate(last)).toLocaleDateString();
  return `${monday} - ${friday}`;
}

export default connect(null, { startOrdering })(WeeklyMenu);
