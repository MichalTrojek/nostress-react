import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import fetchMeals from '../../../actions/fetchMeals';

import Button from '../Button';
import styled from 'styled-components';
import Label from '../Label';
import MealsList from '../MealsList';
import Row from '../Row';
import menuIcon from '../../../img/menu-icon.png';

const MealsDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

  @media only screen and (min-width: 320px) {
    font-size: 1.3rem;
  }

  @media only screen and (min-width: 360px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 411px) {
    font-size: 1.6rem;
  }

  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.9rem;
  }
`;

const Meals = ({ fetchMeals, meals }) => {
  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  const weeklyData = {
    text:
      'Polední Menu se sklada z hlavního chodu a polévky a je možné si ho objednat předem k vyzvednutí na restauraci nebo rozvozem k Vám domů. Jídlo Vám rádi dovezeme domů vždy čerstvé. Objednejte si1',
  };

  return (
    <>
      <h1>Týdenní menu</h1>
      <p style={{ padding: '1rem 0rem' }}>{weeklyData.text}</p>
      <MealsDateContainer>
        <Row>
          <Label text={getDateText()} />
          <Button text="OBJEDNAT" />
        </Row>
        <MealsList header="Menu" info="sleva" icon={menuIcon} items={meals} />
      </MealsDateContainer>
    </>
  );
};

function getDateText() {
  const curr = new Date();
  const first = curr.getDate() - curr.getDay() + 1;
  const last = first + 4;
  const monday = new Date(curr.setDate(first)).toLocaleDateString().slice(0, 7);
  const friday = new Date(curr.setDate(last)).toLocaleDateString();
  return `${monday} - ${friday}`;
}

function mapStateToProps(state, prevState) {
  const { meals } = state;
  return {
    meals,
  };
}
export default connect(mapStateToProps, { fetchMeals })(Meals);
