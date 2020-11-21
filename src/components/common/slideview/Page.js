import styled from 'styled-components';

const Page = styled.div`
  color: var(--color-primary);
  padding: 2rem;
  display: grid !important;
  grid-template-rows: max-content max-content max-content 1fr;
  grid-row-gap: 3rem;

  p {
    hyphens: auto;
  }

  @media only screen and (min-width: 375px) {
    padding-top: 6rem;

    button {
      justify-self: start;
    }
  }

  @media only screen and (min-width: 411px) {
    padding-top: 4rem;
    grid-row-gap: 6rem;

    p {
      font-size: 1.7rem;
    }
  }

  @media only screen and (min-width: 768px) {
    padding-top: 8rem;
    grid-row-gap: 8rem;

    p {
      font-size: 2.4rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    padding-top: 16rem;
    grid-row-gap: 10rem;

    p {
      font-size: 2.4rem;
    }

    button {
      font-size: 2.4rem;
    }
  }
`;

export default Page;
