import styled from 'styled-components';

const ListItemStyled = styled.div`
  border: 1px solid var(--color-tertiary);
  padding: 2rem;
  margin-bottom: 1rem;

  .content {
    padding-bottom: 2rem;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    Button {
      margin-top: 1rem;
    }
    @media only screen and (min-width: 375px) {
      flex-direction: row;
      justify-content: center;

      Button {
        margin-top: 0rem;
        margin-left: 1rem;
      }
    }
  }
`;

export default ListItemStyled;
