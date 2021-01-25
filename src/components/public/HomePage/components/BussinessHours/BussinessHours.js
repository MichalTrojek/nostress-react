import styled from 'styled-components';
import Background from '../../../../common/Background';
import Wrapper from '../../../../common/Wrapper';
import OpenHours from '../../../../common/OpenHours';

const BussinessHoursWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    padding-bottom: 3rem;
    align-self: flex-start;
  }
`;

const BussinessHours = () => {
  return (
    <Background>
      <BussinessHoursWrapper id="open">
        <h1>Otevírací doba</h1>
        <OpenHours />
      </BussinessHoursWrapper>
    </Background>
  );
};

export default BussinessHours;
