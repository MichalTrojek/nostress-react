import menuIcon from '../../../../img/soups-logo.png';
import Row from '../../../common/Row';
import MenuList from './MenuList';
import styled from 'styled-components';

const SoupRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  .day {
    grid-column: 1 / span 1;
  }

  .name {
    grid-column: 3 / -1;
  }
`;

const SoupsMenuList = styled(MenuList)`
  position: relative;
  padding-bottom: 4rem;
  padding-left: 2rem;
  .price {
    position: absolute;
    left: 4px;
    bottom: 0;
  }
`;

const MenuSoupsList = () => {
  const soupsData = [
    { id: 1, day: 'Pondělí', name: 'Čočková', alergens: '1, 9' },
    { id: 1, day: 'Úterý', name: 'Vývar s játrovými knedlíčky', alergens: '9' },
    { id: 1, day: 'Středa', name: 'Dýňové pyré', alergens: '1, 7' },
    { id: 1, day: 'Čtvrtek', name: 'Gulášová', alergens: '1, 9' },
    { id: 1, day: 'Pátek', name: 'Kulajda', alergens: '1, 7' },
  ];

  return (
    <>
      <SoupsMenuList>
        <Row>
          <h2>Polévka k menu zdarma *</h2>
          <img src={menuIcon} alt="menu-icon" />
        </Row>
        <ul>{renderListOfSoups()}</ul>
        <p className="price">
          *Cena samostatné polévky
          <span style={{ color: 'var(--color-tertiary)' }}> 39,-</span>
        </p>
      </SoupsMenuList>
    </>
  );

  function renderListOfSoups() {
    return soupsData.map((item, index) => {
      return (
        <li key={index}>
          <SoupRow>
            <div className="day">{item.day}</div>
            <div className="name">
              {item.name} ({item.alergens})
            </div>
          </SoupRow>
        </li>
      );
    });
  }
};

export default MenuSoupsList;
