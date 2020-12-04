import styled from 'styled-components';

const InfoBoxBorder = styled.div`
  padding: 5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--color-primary);
  position: relative;

  .notice {
    position: absolute;
    left: 0.4rem;
    bottom: 0;
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
        <p className="notice">*Seznam alergenů na vyžádání u obsluhy.</p>
        <p>
          Více informací na našem{' '}
          <a href="https://www.facebook.com/NoStressCafeRestaurant/">
            {' '}
            facebooku
          </a>
        </p>
      </InfoBoxBorder>
    </>
  );
};

export default InfoBox;
