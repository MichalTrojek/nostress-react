import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import '../Modal/styles/modal.css';

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

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.showModal ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  border-radius: 10px;
  max-width: var(--max-width);
  top: 0;
  left: 0;
  position: absolute;
  cursor: pointer;
`;

const AlergensContainer = styled.div`
  background-color: black;
  padding: 2rem;
  border: 1px solid var(--color-tertiary);

  color: white;

  h2 {
    padding-bottom: 1rem;
  }
`;

const Alergens = ({ alergens, showModal, setShowModal }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(alergens);
  }, [alergens]);

  function handleCloseButton() {
    setShowModal(false);
  }

  return (
    <Overlay showModal={showModal} onClick={handleCloseButton}>
      <CSSTransition
        in={showModal}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <AlergensContainer>
          <h2>Seznam alergenů</h2>
          {content.map((item, index) => {
            try {
              const { number, name } = alergensList[Number(item) - 1];
              return <p key={index}>{`${number}: ${name}`} </p>;
            } catch (error) {}
          })}
        </AlergensContainer>
      </CSSTransition>
    </Overlay>
  );
};

export default Alergens;
