import { connect } from 'react-redux';
import { useState } from 'react';
import menuIcon from '../../../../../../img/soups-logo.png';

import MenuList from './MenuList';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

import Alergens from '../../../../../common/Alergens';

const SoupsMenuList = styled(MenuList)`
  position: relative;
  padding-left: 1rem;
  padding-bottom: 3rem;

  display: grid;

  @media only screen and (min-width: 768px) {
    padding-left: 2rem;
    padding-bottom: 4rem;
  }

  .days {
    @media only screen and (min-width: 1400px) {
      /* position: absolute; */
      top: 25%;
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    padding-right: 1rem;
    padding-bottom: 2rem;
    .row__icon {
      height: 3.7rem;
      width: 3.7rem;
    }
  }
  .price {
    position: absolute;

    left: 0.5rem;
    bottom: 0.5rem;
    @media only screen and (min-width: 768px) {
      left: 0.75rem;
      bottom: 0.75rem;
    }
    @media only screen and (min-width: 1400px) {
      left: 1rem;
      bottom: 1rem;
    }
  }
`;

const SoupRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding-bottom: 1.5rem;
  align-items: center;

  .day {
    grid-column: 1 / span 1;
  }

  .name {
    grid-column: 2 / 5;
  }

  .alergens {
    grid-column: 5 / span 1;
    white-space: nowrap;
    font-size: 2rem;
    padding-left: 1rem;
    cursor: pointer;
  }
`;

const MenuSoupsList = ({ soups = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [alergens, setAlergens] = useState([]);
  return (
    <SoupsMenuList>
      <div className="row">
        <h2>Polévka k menu zdarma*</h2>
        <img className="row__icon" src={menuIcon} alt="menu-icon" />
      </div>
      <div className="days">
        {renderDayAndSoup('Pondělí', soups.monday)}
        {renderDayAndSoup('Úterý', soups.tuesday)}
        {renderDayAndSoup('Středa', soups.wednesday)}
        {renderDayAndSoup('Čtvrtek', soups.thursday)}
        {renderDayAndSoup('Pátek', soups.friday)}
      </div>

      <p className="price">
        *Cena samostatné polévky
        <span style={{ color: 'var(--color-tertiary)', paddingLeft: '1rem' }}>
          {soups.price},-
        </span>
      </p>
      <Alergens
        alergens={alergens}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </SoupsMenuList>
  );

  function renderDayAndSoup(day, soup) {
    return (
      <SoupRow>
        <p className="day">{day || <Skeleton />}</p>
        <p className="name">{`${soup.name}` || <Skeleton />}</p>
        <p className="alergens" onClick={() => handleClick(soup.alergens)}>
          {`(${soup.alergens.join(', ')})` || <Skeleton />}
        </p>
      </SoupRow>
    );
  }

  function handleClick(alergens) {
    setAlergens(alergens);
    setShowModal(true);
  }
};

function mapStateToProps(state, ownProps) {
  const soups = state.data.soups;
  return {
    soups: soups,
  };
}

export default connect(mapStateToProps)(MenuSoupsList);
