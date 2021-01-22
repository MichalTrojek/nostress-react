import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import Button from '../common/Button';

const NotFoundBackground = styled.section`
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const NotFound = () => {
  const history = useHistory();

  return (
    <NotFoundBackground>
      <h1>Stránka neexistuje</h1>
      <p>Vrattě se zpět na hlavní stránku.</p>
      <Button primary onClick={() => history.push('/')}>
        Zpět na hlavní stránku
      </Button>
    </NotFoundBackground>
  );
};

export default NotFound;
