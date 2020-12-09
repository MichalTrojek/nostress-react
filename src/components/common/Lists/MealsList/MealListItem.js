import Button from '../../Button';
import ListItemStyled from '../ListItemStyled';
const MealListItem = ({ name, alergens, price }) => {
  return (
    <ListItemStyled>
      <div className="content">
        <p>Název: {name}</p>
        <p>Alergeny: ({alergens})</p>
        <p>Cena: {price},-</p>
      </div>
      <div className="buttons">
        <Button text="editovat"></Button>
        <Button text="smazat"></Button>
      </div>
    </ListItemStyled>
  );
};

export default MealListItem;
