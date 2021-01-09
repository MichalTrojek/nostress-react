import styled from 'styled-components';
import Button from '../Button';

import { CSSTransition } from 'react-transition-group';

import './styles/modal.css';

const ModelOverlay = styled.div`
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
`;

const ModalContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem 0 2rem;

  position: absolute;
  z-index: 1;
  outline: 1px solid var(--color-tertiary);
  p {
    color: white;
  }

  .dialogButtons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 2rem 0 2rem 0;

    Button {
      width: 50%;
    }

    Button:first-child {
      margin-right: 1rem;
    }
  }
`;

const Modal = ({ text, showModal, setShowModal, confirm }) => {
  function handleCloseButton() {
    setShowModal(false);
  }

  function handleConfirmButton() {
    confirm();
    handleCloseButton();
  }
  return (
    <ModelOverlay showModal={showModal} onClick={handleCloseButton}>
      <CSSTransition
        in={showModal}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <ModalContainer>
          <p>{text}</p>
          <div className="dialogButtons">
            <Button primary onClick={handleConfirmButton}>
              Ok
            </Button>
            <Button secundary onClick={handleCloseButton}>
              zrušit
            </Button>
          </div>
        </ModalContainer>
      </CSSTransition>
    </ModelOverlay>
  );
};

export default Modal;
