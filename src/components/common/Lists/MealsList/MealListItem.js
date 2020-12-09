import { connect } from 'react-redux';
import Button from '../../Button';
import ListItemStyled from '../ListItemStyled';

import setSelectedItem from '../../../../redux/actions/editor/setSelectedItem';
import toggleEditMode from '../../../../redux/actions/editor/toggleEditMode';

const MealListItem = ({
  name,
  alergens,
  price,
  isEditModeOn,
  setSelectedItem,
  toggleEditMode,
}) => {
  return (
    <ListItemStyled>
      <div className="content">
        <p>Název: {name}</p>
        <p>Alergeny: ({alergens})</p>
        <p>Cena: {price},-</p>
      </div>
      <div className="buttons">
        <Button onClick={handleEdit} text="editovat"></Button>
        <Button onClick={handleDelete} text="smazat"></Button>
      </div>
    </ListItemStyled>
  );

  function handleEdit() {
    setSelectedItem({ name, alergens, price });
    toggleEditMode(true);
  }
  function handleDelete() {
    if (!isEditModeOn) {
      console.log('delete');
    }
  }
};

function mapStateToProps(state, ownProps) {
  return { isEditModeOn: state.editor.isEditModeOn };
}

export default connect(mapStateToProps, { setSelectedItem, toggleEditMode })(
  MealListItem
);
