import WeeklyMenu from './WeeklyMenu';
import styled from 'styled-components';

const MealsMenusBackground = styled.div`
  background-color: black;
`;

const MealsMenus = () => {
  return (
    <MealsMenusBackground>
      <WeeklyMenu />
    </MealsMenusBackground>
  );
};

export default MealsMenus;
