import styled from 'styled-components';

const InfoBoxBorder = styled.div`
  padding: 5rem 0;

  @media only screen and (min-width: 1024px) {
    padding: 12.5rem 0;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid var(--color-primary);
  position: relative;

  .notice {
    position: absolute;
    left: 0.4rem;
    bottom: 0;
  }
`;

const InfoBox = () => {
  return (
    <>
      <InfoBoxBorder>
        <p>Výdej s sebou nebo rozvoz</p>
        <p>11:00 - 16:00</p>
        <p className="notice">*Seznam alergenů na vyžádání u obsluhy.</p>
      </InfoBoxBorder>
    </>
  );
};

export default InfoBox;
