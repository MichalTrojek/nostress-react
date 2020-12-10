import styled from 'styled-components';
import Background from '../../common/Background';
import Wrapper from '../../common/Wrapper';
import MealsForms from '../../common/Forms/MealsForms';
import MealsList from '../../common/Lists/MealsList';

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
