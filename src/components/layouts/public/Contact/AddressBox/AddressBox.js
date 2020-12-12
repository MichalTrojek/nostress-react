import styled from 'styled-components';
import SocialLinks from '../SocialLinks';

const AddressBoxContainer = styled.div`
  @media only screen and (min-width: 660px) {
    grid-column: 1 / span 6;
  }
`;

const AddressBoxStyled = styled.div`
  border: solid 1px var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  font-weight: bold;

  .colored {
    color: var(--color-tertiary);
  }
`;

const AddressBox = () => {
  return (
    <AddressBoxContainer>
      <AddressBoxStyled>
        <p className="colored">+420 732 161 372</p>
        <p className="colored">info@nostresscafe.cz</p>
        <p>Jihlavská 7, Troubsko 664 41</p>
      </AddressBoxStyled>
      <SocialLinks />
    </AddressBoxContainer>
  );
};

export default AddressBox;
