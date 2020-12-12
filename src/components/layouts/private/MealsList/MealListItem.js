import { connect } from 'react-redux';
import Button from '../../../common/Button';
import ListItem from '../../../common/Lists/ListItem';

import setSelectedItem from '../../../../redux/actions/editor/setSelectedItem';
import toggleEditMode from '../../../../redux/actions/editor/toggleEditMode';
import deleteMeal from '../../../../redux/actions/meals/deleteMeal';
import { showInfoToast } from '../../../../notifications/toast';

const MealListItem = ({
  meal,
  isEditModeOn,
  setSelectedItem,
  toggleEditMode,
  deleteMeal,
}) => {
  return (
    <ListItem>
      <div className="content">
        {renderIsChildMeal()}
        <p>Název: {meal.name}</p>
        <p>Alergeny: ({meal.alergens})</p>
        <p>Cena: {meal.price},-</p>
      </div>
      <div className="buttons">
        <Button primary onClick={handleEdit}>
          editovat{' '}
        </Button>
        <Button onClick={handleDelete}> smazat</Button>
      </div>
    </ListItem>
  );

  function renderIsChildMeal() {
    switch (meal.type) {
      case 'isChildMeal':
        return <p style={{ fontWeight: 'bold' }}>Dětské menu</p>;
      case 'isBreakfastMeal':
        return <p style={{ fontWeight: 'bold' }}>Snídaňové menu</p>;
      default:
        return <p style={{ fontWeight: 'bold' }}>Týdenní menu</p>;
    }
  }

  function handleEdit() {
    setSelectedItem(meal);
    toggleEditMode(true);

    window.scroll({ top: 0, behavior: 'smooth' });
  }

  function handleDelete() {
    if (!isEditModeOn) {
      deleteMeal(meal.id);
    } else {
      showInfoToast('Nelze mazat během editování.');
    }
  }
};

function mapStateToProps(state, ownProps) {
  return { isEditModeOn: state.editor.isEditModeOn };
}

export default connect(mapStateToProps, {
  setSelectedItem,
  toggleEditMode,
  deleteMeal,
})(MealListItem);
