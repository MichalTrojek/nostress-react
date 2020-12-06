import styled from 'styled-components';

import Background from '../../common/Background';
import Wrapper from '../../common/Wrapper';
import AddressBox from './AddressBox';
import Map from './Map';

const ContactContainer = styled.div`
  display: grid;
  padding: 5rem 0;

  @media only screen and (min-width: 660px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
  }
`;
const Contact = () => {
  return (
    <Background>
      <Wrapper>
        <h1 id="contact">Kontakt</h1>
        <ContactContainer>
          <AddressBox />
          <Map />
        </ContactContainer>
      </Wrapper>
    </Background>
  );
};

export default Contact;
