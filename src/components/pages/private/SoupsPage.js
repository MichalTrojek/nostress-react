import styled from 'styled-components';
import Background from '../../common/Background';
import Wrapper from '../../common/Wrapper';
import SoupsForm from '../../common/Forms/SoupsForm';
import MealsList from '../../common/Lists/MealsList';

const SoupsPageBackground = styled(Background)`
  min-height: 100vh;
`;

const MealsPage = () => {
  return (
    <SoupsPageBackground>
      <Wrapper>
        <h1>Tvorba polévkoho menu</h1>
        <SoupsForm />
        {/* <MealsForms />
        <MealsList /> */}
      </Wrapper>
    </SoupsPageBackground>
  );
};

export default MealsPage;
