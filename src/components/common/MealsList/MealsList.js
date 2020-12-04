import Row from '../Row';
import StyledMealsMenu from '../StyledMealsMenu';

const MealList = (props) => {
  return (
    <>
      <StyledMealsMenu>
        <Row className="menu-row">
          <h1>{renderHeader()} </h1>
          <img src={props.icon} alt="menu-icon" />
        </Row>
        <ol>{renderList()}</ol>
      </StyledMealsMenu>
    </>
  );

  function renderHeader() {
    let header;
    props.info
      ? (header = `${props.header} - ${props.info}`)
      : (header = props.header);
    return header;
  }

  function renderList() {
    return props.items.map((item, index) => {
      return (
        <li key={item.id}>
          {`${item.name}`}
          <span style={{ color: 'var(--color-tertiary)', padding: '0 .3rem' }}>
            {`${item.price},-`}
          </span>
          <span style={{ whiteSpace: 'nowrap' }}>{`(${item.alergens})`}</span>
        </li>
      );
    });
  }
};

export default MealList;
