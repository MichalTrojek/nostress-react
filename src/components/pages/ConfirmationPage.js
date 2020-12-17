import styled from 'styled-components';

import Background from '../common/Background';
import Wrapper from '../common/Wrapper';

import Confirmation from '../layouts/public/Confirmation';
const ConfirmationPageBackground = styled(Background)`
  min-height: 100vh;
`;

const ConfirmationPage = () => {
  return (
    <ConfirmationPageBackground>
      <Wrapper>
        <Confirmation />
      </Wrapper>
    </ConfirmationPageBackground>
  );
};

export default ConfirmationPage;
