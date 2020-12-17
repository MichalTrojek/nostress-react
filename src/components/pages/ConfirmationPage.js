import styled from 'styled-components';

import Background from '../common/Background';
import Wrapper from '../common/Wrapper';

import Confirmation from '../layouts/public/Confirmation';
const ConfirmationPageBackground = styled(Background)`
  min-width: 100vh;
`;

const ConfirmationPage = () => {
  return (
    <ConfirmationPageBackground>
      <Wrapper>
        <h1>Potvrzení objednávky</h1>
        <Confirmation />
      </Wrapper>
    </ConfirmationPageBackground>
  );
};

export default ConfirmationPage;
