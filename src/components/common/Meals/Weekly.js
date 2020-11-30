import WeeklyDate from '../WeeklyDate';
import Button from '../Button';
import styled from 'styled-components';

const WeeklyDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 1rem 0;
`;
const Weekly = () => {
  const weeklyData = {
    text:
      'Polední Menu se sklada z hlavního chodu a polévky a je možné si ho objednat předem k vyzvednutí na restauraci nebo rozvozem k Vám domů. Jídlo Vám rádi dovezeme domů vždy čerstvé. Objednejte si1',
  };

  return (
    <>
      <h1>Týdenní menu</h1>
      <p style={{ padding: '1rem 0rem' }}>{weeklyData.text}</p>
      <WeeklyDateContainer>
        <WeeklyDate />
        <Button text="OBJEDNAT" />
      </WeeklyDateContainer>
    </>
  );
};

export default Weekly;
