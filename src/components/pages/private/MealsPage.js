import styled from 'styled-components';
import Wrapper from '../../common/Wrapper';
import MealsForms from '../../layouts/private/Editors/MealsEditor/MealsForms';
import MealsList from '../../layouts/private/Editors/MealsEditor/MealsList';
import PrivateNavBar from '../../common/PrivateNavBar';

const MealsPageBackground = styled.div`
  min-height: 100vh;
  background-color: black;
`;

const MealsPage = () => {
  return (
    <MealsPageBackground>
      <Wrapper>
        <PrivateNavBar />
        <h1>Tvorba menu</h1>
        <MealsForms />
        <MealsList />
      </Wrapper>
    </MealsPageBackground>
  );
};

export default MealsPage;
