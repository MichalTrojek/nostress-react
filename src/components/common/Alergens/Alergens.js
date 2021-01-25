import styled from 'styled-components';
import { useState, useEffect } from 'react';
const alergensList = [
  { number: 1, name: 'Lepek' },
  { number: 2, name: 'Korýši' },
  { number: 3, name: 'Vejce' },
  { number: 4, name: 'Ryby' },
  { number: 5, name: 'Arašídy' },
  { number: 6, name: 'Sója' },
  { number: 7, name: 'Mlého' },
  { number: 8, name: 'Skořápkové plody' },
  { number: 9, name: 'Celer' },
  { number: 10, name: 'Hořčice' },
  { number: 11, name: 'Sezam' },
  { number: 12, name: 'Oxid siřičitý a siřičitany' },
  { number: 13, name: 'Vlčí bob' },
  { number: 14, name: 'Měkkýši' },
];

const AlergensContainer = styled.div`
  background-color: black;
  position: absolute;
  border: 1px solid var(--color-tertiary);
  padding: 2rem;
  top: -200%;
  right: 0;
  z-index: ${(props) => (props.showAlergens ? 8995544 : -55)};
  color: white;

  h3 {
    padding-bottom: 1rem;
  }
`;

const Alergens = ({ alergens }) => {
  const [content, setContent] = useState([]);
  const [showAlergens, setShowAlergens] = useState(false);

  useEffect(() => {
    setContent(alergens.split(','));
  }, [alergens]);

  return (
    <>
      <small
        onClick={() => setShowAlergens(!showAlergens)}
        style={{
          whiteSpace: 'nowrap',
          paddingLeft: '1rem',
          cursor: 'pointer',
          position: 'relative',
        }}
      >
        ({alergens})
        {showAlergens && (
          <AlergensContainer showAlergens={showAlergens}>
            <h3>Seznam alergenů</h3>
            {content.map((item, index) => {
              const { number, name } = alergensList[
                Number(item.replaceAll(' ', ''))
              ];
              return <p>{`${number}: ${name}`} </p>;
            })}
          </AlergensContainer>
        )}
      </small>
    </>
  );
};

export default Alergens;