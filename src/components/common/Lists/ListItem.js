import styled from 'styled-components';

const ListItem = styled.div`
  border: 1px solid var(--color-tertiary);
  padding: 1rem;

  margin: 0.2rem;
  min-width: 100%;

  @media only screen and (min-width: 768px) {
    --width: calc((98% / 2));
    max-width: var(--width);
    min-width: var(--width);
  }

  @media only screen and (min-width: 1024px) {
    --width: calc((99% / 2));
  }

  .content {
    padding-bottom: 2rem;
    p {
      font-size: 2rem;
    }
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

export default ListItem;
