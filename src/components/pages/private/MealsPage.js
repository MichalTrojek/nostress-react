import Background from '../../common/Background';
import Wrapper from '../../common/Wrapper';
import MealsForms from '../../common/Forms/MealsForms';

const MealsPage = () => {
  return (
    <Background>
      <Wrapper>
        <h1>Tvorba menu položek</h1>
        <MealsForms />
      </Wrapper>
    </Background>
  );
};

export default MealsPage;
