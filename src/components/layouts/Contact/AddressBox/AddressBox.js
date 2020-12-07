import styled from 'styled-components';
import facebook from '../../../../img/facebook.png';
import instagram from '../../../../img/instagram.png';

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

const SocialLinks = styled.div`
  display: flex;

  align-items: center;
  padding: 1rem 0;

  .facebook,
  .instagram {
    height: 4rem;
    max-width: 100%;
    padding: 0 0.6rem;
  }
  .facebook:hover,
  .instagram:hover {
    filter: brightness(90%);
  }

  p {
    font-weight: bold;
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
      <SocialLinks>
        <p>Sledujte nás na sociálních sítich: </p>
        <a href="https://www.facebook.com/NoStressCafeRestaurant">
          <img className="facebook" src={facebook} alt="socialfacebook" />
        </a>
        <a href="https://www.instagram.com/nostress_cafe_troubsko/">
          <img className="instagram" src={instagram} alt="instagram" />
        </a>
      </SocialLinks>
    </AddressBoxContainer>
  );
};

export default AddressBox;
