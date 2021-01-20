import styled from 'styled-components';
import PrivateNavBar from '../common/PrivateNavBar';

import Wrapper from '../common/Wrapper';

const TextPageBackground = styled.div`
  min-height: 100vh;
  background-color: black;
`;

const TextPage = () => {
  return (
    <TextPageBackground>
      <Wrapper>
        <PrivateNavBar />
        <h1>textPage</h1>
      </Wrapper>
    </TextPageBackground>
  );
};

export default TextPage;
