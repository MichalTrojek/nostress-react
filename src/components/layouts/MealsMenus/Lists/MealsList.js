import Row from '../../../common/Row';
import ListStyled from './ListStyled';

const MealList = (props) => {
  return (
    <>
      <ListStyled>
        <Row className="menu-row">
          <h2>
            {props.header}{' '}
            <span
              style={{ color: 'var(--color-tertiary)', padding: '0 .3rem' }}
            >
              {renderInfo()}
            </span>{' '}
          </h2>
          <img src={props.icon} alt="menu-icon" />
        </Row>
        <ol>{renderList()}</ol>
      </ListStyled>
    </>
  );

  function renderInfo() {
    return props.info ? `${props.info}` : '';
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
