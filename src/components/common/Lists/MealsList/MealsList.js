import { useEffect } from 'react';
import { connect } from 'react-redux';

import ListContainer from '../ListContainer';
import ListItem from '../ListItem';
import fetchMeals from '../../../../redux/actions/meals/fetchMeals';

const MealsList = ({ meals, fetchMeals }) => {
  useEffect(() => {
    if (meals.length === 0) {
      fetchMeals();
    }
  }, [fetchMeals, meals.length]);

  return <ListContainer>{renderList()}</ListContainer>;

  function renderList() {
    if (meals.length !== 0) {
      return meals.map((meal) => {
        return (
          <ListItem
            name={meal.name}
            alergens={meal.alergens}
            price={meal.price}
          />
        );
      });
    }
  }
};

function mapPropsToState(state, prevState) {
  const { meals } = state;
  return { meals };
}
export default connect(mapPropsToState, { fetchMeals })(MealsList);
