import { useState } from 'react';
import MenuList from './MenuList';
import Alergens from '../../../../../common/Alergens';

const MenuMealList = ({ header, info, icon, items = [] }) => {
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
          <span
            style={{ color: 'var(--color-tertiary)', paddingLeft: '.5rem' }}
          >
            {`${item.price},-`}
          </span>
          <Alergens alergens={item.alergens} />
        </li>
      );
    });
  }
};

export default MenuMealList;
