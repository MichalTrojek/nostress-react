import styled from 'styled-components';
import facebook from '../../../../img/facebook.png';
import instagram from '../../../../img/instagram.png';

const SocialLinksStyled = styled.div`
  display: flex;

  align-items: center;
  padding: 1rem 0;

  .facebook,
  .instagram {
    height: 4rem;
    max-width: 100%;
    padding: 0 1rem;
  }
  .facebook:hover,
  .instagram:hover {
    filter: brightness(90%);
  }

  p {
    font-weight: bold;
    padding-right: 1.4rem;
  }
`;

const SocialLinks = () => {
  return (
    <SocialLinksStyled>
      <p>Sledujte nás na sociálních sítich: </p>
      <a href="https://www.facebook.com/NoStressCafeRestaurant">
        <img className="facebook" src={facebook} alt="socialfacebook" />
      </a>
      <a href="https://www.instagram.com/nostress_cafe_troubsko/">
        <img className="instagram" src={instagram} alt="instagram" />
      </a>
    </SocialLinksStyled>
  );
};

export default SocialLinks;
