import { useEffect } from 'react';
import { connect } from 'react-redux';

import menuIcon from '../../../../../img/soups-logo.png';
import Row from '../../../../common/Row';
import MenuList from './MenuList';
import styled from 'styled-components';

import fetchSoups from '../../../../../redux/actions/soups/fetchSoups';

const SoupRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  .day {
    grid-column: 1 / span 4;
  }

  .name {
    grid-column: 5 / -1;
  }
`;

const SoupsMenuList = styled(MenuList)`
  position: relative;
  padding-bottom: 4rem;
  padding-left: 2rem;
  .price {
    position: absolute;
    left: 4px;
    bottom: 0;
  }
`;

const MenuSoupsList = ({ fetchSoups, fetchedData, soups = [] }) => {
  useEffect(() => {
    if (!fetchedData) {
      fetchSoups();
    }
  }, []);
  return (
    <SoupsMenuList>
      <Row>
        <h2>Polévka k menu zdarma*</h2>
        <img src={menuIcon} alt="menu-icon" />
      </Row>
      {renderDayAndSoup('Pondělí', soups.monday)}
      {renderDayAndSoup('Úterý', soups.tuesday)}
      {renderDayAndSoup('Středa', soups.wednesday)}
      {renderDayAndSoup('Čtvrtek', soups.thursday)}
      {renderDayAndSoup('Pátek', soups.friday)}

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
  const soups = state.soups;
  const dataFetched = state.soups.length > 0;
  return {
    soups: soups,
    dataFetched: dataFetched,
  };
}

export default connect(mapStateToProps, { fetchSoups })(MenuSoupsList);
