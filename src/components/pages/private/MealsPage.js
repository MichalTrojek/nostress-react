import styled from 'styled-components';
import Background from '../../common/Background';
import Wrapper from '../../common/Wrapper';
import MealsForms from '../../layouts/private/MealsForms';
import MealsList from '../../layouts/private/MealsList';

const MealsPageBackground = styled(Background)`
  min-height: 100vh;
`;

const MealsPage = () => {
  return (
    <MealsPageBackground>
      <Wrapper>
        <h1>Tvorba menu</h1>
        <MealsForms />
        <MealsList />
      </Wrapper>
    </MealsPageBackground>
  );
};

export default MealsPage;
