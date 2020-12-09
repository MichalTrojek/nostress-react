import styled from 'styled-components';
import Button from '../Button';

const ListItemStyled = styled.div`
  border: 1px solid var(--color-tertiary);
  padding: 2rem;
  margin-bottom: 1rem;

  .content {
    padding-bottom: 2rem;
  }

  .price {
    color: var(--color-tertiary);
  }

  .buttons {
    display: flex;
    flex-direction: column;
    Button {
      margin-top: 1rem;
    }
    @media only screen and (min-width: 375px) {
      flex-direction: row;
      justify-content: center;

      Button {
        margin-top: 0rem;
        margin-left: 1rem;
      }
    }
  }
`;

const ListItem = ({ name, alergens, price }) => {
  return (
    <ListItemStyled>
      <div className="content">
        <p>Název: {name}</p>
        <p>Alergeny: ({alergens})</p>
        <p className="price">Cena: {price},-</p>
      </div>
      <div className="buttons">
        <Button text="editovat"></Button>
        <Button text="smazat"></Button>
      </div>
    </ListItemStyled>
  );
};

export default ListItem;
