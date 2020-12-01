import styled from 'styled-components';

const Page = styled.div`
  color: var(--color-primary);
  padding: 1rem;
  /* display: grid !important;
  grid-template-rows: max-content max-content max-content 1fr;
  grid-row-gap: 4rem; */

  display: flex !important;
  flex-direction: column;
  justify-content: space-around;

  p {
    hyphens: auto;
  }
  height: 80vh;

  @media only screen and (min-width: 411px) {
    height: 75vh;
  }
`;

export default Page;
