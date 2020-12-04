import menuIcon from '../../../img/soups-logo.png';
import Row from '../Row';
import StyledMealsMenu from '../StyledMealsMenu';
import styled from 'styled-components';

const SoupRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
const SoupCol1 = styled.div`
  grid-column: 1 / span 1;
`;
const SoupCol2 = styled.div`
  grid-column: 2 / -1;
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
      const text = `${item.day}  ${item.name} (${item.alergens})`;

      return (
        <li key={index}>
          <p>
            <SoupRow>
              <SoupCol1>{item.day}</SoupCol1>
              <SoupCol2>
                {item.name} ({item.alergens})
              </SoupCol2>
            </SoupRow>
          </p>
        </li>
      );
    });
  }
};

export default SoupsList;
