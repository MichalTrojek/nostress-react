import styled from 'styled-components';

const InfoBoxBorder = styled.div`
  padding: 5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--color-primary);
  position: relative;

  p:not(:last-child) {
    padding-bottom: 1rem;
  }

  .notice {
    position: absolute;

    left: 0.5rem;
    bottom: 0.5rem;
    @media only screen and (min-width: 768px) {
      left: 0.75rem;
      bottom: 0.75rem;
    }
    @media only screen and (min-width: 1400px) {
      left: 1rem;
      bottom: 1rem;
    }
  }

  a,
  a:link,
  a:active {
    color: var(--color-tertiary);
    text-decoration: none;
  }
`;

const InfoBox = ({ time, text }) => {
  return (
    <>
      <InfoBoxBorder>
        <p>Výdej s sebou nebo rozvoz</p>
        <p>{time}</p>
        <p>{text}</p>

        <p>
          Více informací na našem{' '}
          <a href="https://www.facebook.com/NoStressCafeRestaurant/">
            {' '}
            facebooku
          </a>
        </p>
        <p className="notice">*Seznam alergenů na vyžádání u obsluhy.</p>
      </InfoBoxBorder>
    </>
  );
};

export default InfoBox;
