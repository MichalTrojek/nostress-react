import menuIcon from '../../../img/soups-logo.png';
import Row from '../Row';
import StyledMealsMenu from '../StyledMealsMenu';

const SoupsList = () => {
  const soupsData = [
    { id: 1, day: 'Pondělí', name: 'Čočková', alergens: '1, 9', price: 39 },
    {
      id: 1,
      day: 'Úterý',
      name: 'Vývar s játrovými knedlíčky',
      alergens: '9',
      price: 39,
    },
    { id: 1, day: ' Středa', name: 'Dýňové pyré', alergens: '1, 7', price: 39 },
    { id: 1, day: ' Čtvrtek', name: 'Gulášová', alergens: '1, 9', price: 39 },
    { id: 1, day: 'Pátek', name: 'Kulajda', alergens: '1, 7', price: 39 },
  ];

  return (
    <>
      <StyledMealsMenu>
        <Row>
          <h1>Polévka k menu zdarma</h1>
          <img src={menuIcon} alt="menu-icon" />
        </Row>
        <ul>{renderListOfSoups()}</ul>
        <p>*Cena samostatné polévky</p>
      </StyledMealsMenu>
    </>
  );

  function renderListOfSoups() {
    return soupsData.map((item, index) => {
      return (
        <li key={index}>
          <p>
            `${item.day} ${item.name} (${item.alergens}
            <span style={{ color: 'var(--color-tertiary)' }}>
              ${item.price},-*
            </span>
            )`
          </p>
        </li>
      );
    });
  }
};

export default SoupsList;
