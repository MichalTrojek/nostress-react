import Button from '../../../../common/Button';
import Label from '../../../../common/Label';

import MenuMealsList from '../Lists/MenuMealsList';
import MenuSoupsList from '../Lists/MenuSoupsList';

import menuIcon from '../../../../../img/menu-icon.png';
import InfoBox from '../InfoBox';

import MealsMenuContainer from '../MealsMenuContainer';
import MealsMenuContent from '../MealsMenuContent';

import { connect } from 'react-redux';
import startOrdering from '../../../../OrderingSystem/redux/actions/startOrdering';

import { useHistory } from 'react-router-dom';

const WeeklyMenu = ({ meals, childMeals, startOrdering, texts }) => {
  const history = useHistory();

  return (
    <MealsMenuContainer id="menu">
      <h1 className="menu__header">{texts.heading}</h1>
      <p className="menu__text">{texts.mainText}</p>
      <div className="row">
        <Label text={texts.dateText} />
        <Button primary onClick={handleStartingOrder}>
          Objednat
        </Button>
      </div>
      <MealsMenuContent>
        <div className="leftside">
          <MenuMealsList
            header="Menu"
            info={texts.menuInfoText}
            icon={menuIcon}
            items={meals}
          />
          <MenuMealsList
            header="Dětské menu"
            info={texts.childMenuInfoText}
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
    window.scrollTo(0, 0);
    history.push('/order');
    startOrdering({ status: true, menuType: 'MainMenu' });
  }
};

export default connect(null, { startOrdering })(WeeklyMenu);
