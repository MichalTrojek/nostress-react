import { connect } from 'react-redux';
import menuIcon from '../../../../../img/soups-logo.png';

import MenuList from './MenuList';
import styled from 'styled-components';

const SoupsMenuList = styled(MenuList)`
  position: relative;
  padding-left: 1rem;
  padding-bottom: 3rem;
  @media only screen and (min-width: 768px) {
    padding-left: 2rem;
    padding-bottom: 4rem;
  }

  .days {
    @media only screen and (min-width: 1400px) {
      position: absolute;
      top: 25%;
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    padding-right: 1rem;
    padding-bottom: 2rem;
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
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 1.5rem;
  align-items: center;
  justify-content: flex-start;

  align-items: flex-start;
  .day {
    grid-column: 1 / span 1;
  }

  .name {
    grid-column: 2 / -1;
  }
`;

const MenuSoupsList = ({ soups = [] }) => {
  return (
    <SoupsMenuList>
      <div className="row">
        <h2>Polévka k menu zdarma*</h2>
        <img src={menuIcon} alt="menu-icon" />
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
    </SoupsMenuList>
  );

  function renderDayAndSoup(day, name) {
    return (
      <SoupRow>
        <p className="day">{day}</p>
        <p className="name">{name}</p>
      </SoupRow>
    );
  }
};

function mapStateToProps(state, ownProps) {
  const soups = state.data.soups;
  return {
    soups: soups,
  };
}

export default connect(mapStateToProps)(MenuSoupsList);