import menuIcon from '../../../img/soups-logo.png';
import Row from '../Row';
import StyledMealsMenu from '../StyledMealsMenu';
import styled from 'styled-components';

const SoupRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  .day {
    grid-column: 1 / span 1;
  }

  .name {
    grid-column: 2 / -1;
  }
`;

const SoupsList = () => {
  const soupsData = [
    { id: 1, day: 'Pondělí', name: 'Čočková', alergens: '1, 9' },
    {
      id: 1,
      day: 'Úterý',
      name: 'Vývar s játrovými knedlíčky',
      alergens: '9',
    },
    { id: 1, day: 'Středa', name: 'Dýňové pyré', alergens: '1, 7' },
    { id: 1, day: 'Čtvrtek', name: 'Gulášová', alergens: '1, 9' },
    { id: 1, day: 'Pátek', name: 'Kulajda', alergens: '1, 7' },
  ];

  return (
    <>
      <StyledMealsMenu>
        <Row>
          <h1>Polévka k menu zdarma *</h1>
          <img src={menuIcon} alt="menu-icon" />
        </Row>
        <ul>{renderListOfSoups()}</ul>
        <p>
          * Cena samostatné polévky
          <span style={{ color: 'var(--color-tertiary)' }}> 39,-</span>
        </p>
      </StyledMealsMenu>
    </>
  );

  function renderListOfSoups() {
    return soupsData.map((item, index) => {
      return (
        <li key={index}>
          <p>
            <SoupRow>
              <div className="day">{item.day}</div>
              <div className="name">
                {item.name} ({item.alergens})
              </div>
            </SoupRow>
          </p>
        </li>
      );
    });
  }
};

export default SoupsList;
