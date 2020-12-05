import Background from '../Background';
import Wrapper from '../Wrapper';
import styled from 'styled-components';
import AddressBox from './AddressBox';

const ContactContainer = styled.div`
  display: grid;
  padding-top: 3rem;
`;
const Contact = () => {
  return (
    <Background>
      <Wrapper>
        <h1 id="contact">Kontakt</h1>
        <ContactContainer>
          <AddressBox />
        </ContactContainer>
      </Wrapper>
    </Background>
  );
};

export default Contact;
