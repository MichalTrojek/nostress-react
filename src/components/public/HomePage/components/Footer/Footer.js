import styled from 'styled-components';
import Wrapper from '../../../../common/Wrapper';

import productivv from '../../../../../img/productivv.png';

const FooterBackground = styled.section`
  background-color: var(--color-quaternary);
  padding: 1% 0;
`;
const FooterWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 1rem;

  .copyright {
    padding: 2rem 0;
  }

  .createdBy {
    display: flex;
    justify-content: cetner;
    align-items: center;
    padding-top: 2rem;
  }

  .information-1 {
    padding-left: 1rem;
    color: white;
  }

  .productivv-logo {
    max-width: 20rem;
    height: auto;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterBackground>
        <FooterWrapper>
          <p className="copyright">
            Copyright &copy; 2020 Mofeer s.r.o | Všechna práva vyhrazena.
            <a className="information-1" href="#/">
              Informace o zpracování osobních údajů
            </a>
          </p>
          <p className="information-2">
            Podle zákona o evidenci tržeb je prodávající povinen vystavit
            kupujícímu účtenku. Zároveň je povinen zaevidovat přijatou tržbu u
            správce daně online. V případě technického výpadku pak nejpozději do
            48 hodin.
          </p>
          <p className="createdBy">
            Vytvořil
            <a href="http://productivv.cz/">
              <img
                src={productivv}
                alt="Productivv logo "
                className="productivv-logo"
              />
            </a>
          </p>
        </FooterWrapper>
      </FooterBackground>
    </>
  );
};

export default Footer;
