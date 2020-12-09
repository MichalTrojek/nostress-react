import Background from '../../common/Background';
import Wrapper from '../../common/Wrapper';
import MealsForms from '../../common/Forms/MealsForms';
import MealsList from '../../common/Lists/MealsList';

const MealsPage = () => {
  return (
    <Background>
      <Wrapper>
        <h1>Tvorba menu položek</h1>
        <MealsForms />
        <MealsList />
      </Wrapper>
    </Background>
  );
};

export default MealsPage;
