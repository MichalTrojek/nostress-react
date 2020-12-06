import styled from 'styled-components';

import WeeklyMenu from './WeeklyMenu';
import BreakFastMenu from './BreakFastMenu';

const MealsMenusBackground = styled.div`
  background-color: black;

  padding-bottom: 3rem;
`;

const MealsMenus = () => {
  return (
    <MealsMenusBackground>
      <WeeklyMenu />
      <BreakFastMenu />
    </MealsMenusBackground>
  );
};

export default MealsMenus;
