import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ListContainer from '../ListContainer';
import MealListItem from '../MealsList/MealListItem';
import fetchMeals from '../../../../redux/actions/meals/fetchMeals';

import Checkbox from '../../Checkbox';

const MealsList = ({ meals, childMeals, fetchMeals }) => {
  const [showChildMeals, setShowChildMeals] = useState(false);
  useEffect(() => {
    if (meals.length === 0) {
      fetchMeals();
    }
  }, [fetchMeals, meals.length]);

  return (
    <ListContainer>
      <Checkbox>
        <input
          type="checkbox"
          value={showChildMeals}
          onChange={(event) => setShowChildMeals(event.target.checked)}
          id="showChildMeals"
        />
        <label htmlFor="showChildMeals">Zobraz dětské menu</label>
      </Checkbox>
      {renderList()}
    </ListContainer>
  );

  function renderList() {
    let listOfMeals = showChildMeals ? childMeals : meals;
    if (listOfMeals.length !== 0) {
      return listOfMeals.map((meal, index) => {
        return <MealListItem key={index} meal={meal} />;
      });
    }
  }
};

function mapPropsToState(state, prevState) {
  const meals = [];
  const childMeals = [];

  state.meals.forEach((meal) => {
    if (meal.isChildMeal) {
      childMeals.push(meal);
    } else {
      meals.push(meal);
    }
  });

  return { meals: meals, childMeals: childMeals };
}
export default connect(mapPropsToState, { fetchMeals })(MealsList);
