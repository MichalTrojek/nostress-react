import Row from '../../../common/Row';
import MenuList from './MenuList';

const MenuMealList = ({ header, info, icon, items = [] }) => {
  return (
    <>
      <MenuList>
        <Row className="menu-row">
          <h2>
            {header}
            <span
              style={{ color: 'var(--color-tertiary)', padding: '0 .3rem' }}
            >
              {renderInfo()}
            </span>
          </h2>
          <img src={icon} alt="menu-icon" />
        </Row>
        <ol>{renderList()}</ol>
      </MenuList>
    </>
  );

  function renderInfo() {
    return info ? `${info}` : '';
  }

  function renderList() {
    return items.map((item, index) => {
      return (
        <li key={item.id}>
          {`${item.name}`}
          <span style={{ color: 'var(--color-tertiary)', padding: '1rem' }}>
            {`${item.price},-`}
          </span>
          <span style={{ whiteSpace: 'nowrap' }}>
            {item.alergens.length !== 0 ? `(${item.alergens})` : ``}
          </span>
        </li>
      );
    });
  }
};

export default MenuMealList;