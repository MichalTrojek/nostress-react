import styled from 'styled-components';
import Background from '../common/Background';
import Wrapper from '../common/Wrapper';
import Summary from '../layouts/public/Orders/Summary';

const SummaryBackground = styled(Background)`
  min-height: 100vh;
`;

const SummaryPage = () => {
  return (
    <SummaryBackground>
      <Wrapper>
        <Summary></Summary>
      </Wrapper>
    </SummaryBackground>
  );
};

export default SummaryPage;
