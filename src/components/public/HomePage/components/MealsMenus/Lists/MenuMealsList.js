import { useState } from 'react';
import MenuList from './MenuList';
import Alergens from '../../../../../common/Alergens';

const MenuMealList = ({ header, info, icon, items = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [alergens, setAlergens] = useState([]);

  return (
    <>
      <MenuList>
        <div className="menu-row">
          <h2>
            {header}
            <span
              className="menu-info"
              style={{ color: 'var(--color-tertiary)', padding: '0 .3rem' }}
            >
              {renderInfo()}
            </span>
          </h2>
          <img src={icon} alt="menu-icon" />
        </div>
        <ol>{renderList()}</ol>
        <Alergens
          alergens={alergens}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </MenuList>
    </>
  );

  function renderInfo() {
    return info ? `${info}` : '';
  }

  function renderList() {
    return items.map((item, index) => {
      return (
        <li key={index}>
          {`${item.name}`}
          <span
            style={{ color: 'var(--color-tertiary)', paddingLeft: '.5rem' }}
          >
            {`${item.price},-`}
          </span>
          <small
            onClick={() => handleClick(item.alergens)}
            style={{
              whiteSpace: 'nowrap',
              paddingLeft: '1rem',
              cursor: 'pointer',
            }}
          >
            {renderAlergens(item)}
          </small>
        </li>
      );
    });
  }
  function renderAlergens(item) {
    return item.alergens[0] === '' ? '' : `(${item.alergens.join(', ')})`;
  }

  function handleClick(alergens) {
    setAlergens(alergens);
    setShowModal(true);
  }
};

export default MenuMealList;
