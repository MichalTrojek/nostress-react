import { connect } from 'react-redux';
import Button from '../../Button';
import ListItem from '../ListItem';

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
        <Button onClick={handleEdit} text="editovat"></Button>
        <Button onClick={handleDelete} text="smazat"></Button>
      </div>
    </ListItem>
  );

  function renderIsChildMeal() {
    return meal.isChildMeal ? (
      <p style={{ fontWeight: 'bold' }}>Dětské menu</p>
    ) : (
      <p style={{ fontWeight: 'bold' }}>Týdenní menu</p>
    );
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
