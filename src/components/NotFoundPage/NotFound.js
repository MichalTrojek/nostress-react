import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import Button from '../common/Button';

const NotFoundBackground = styled.section`
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;

  .NotFound__button {
    margin-top: 10%;
  }
`;

const NotFound = () => {
  const history = useHistory();

  return (
    <NotFoundBackground>
      <h1>Stránka neexistuje</h1>

      <Button
        className="NotFound__button"
        primary
        onClick={() => history.push('/')}
      >
        Zpět na hlavní stránku
      </Button>
    </NotFoundBackground>
  );
};

export default NotFound;
