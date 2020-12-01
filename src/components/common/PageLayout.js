import React from 'react';
import styled from 'styled-components';

const Content = styled.main`
  box-sizing: border-box;
  margin-top: 6rem;

  h1,
  h2,
  h3,
  h4 {
    color: var(--color-primary);
  }

  h1 {
    font-size: 2.2rem;
    font-weight: 900;

    @media only screen and (min-width: 411px) {
      font-size: 2.7rem;
    }

    @media only screen and (min-width: 768px) {
      font-size: 4rem;
    }

    @media only screen and (min-width: 1024px) {
      font-size: 6.4rem;
    }
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 700;
  }
  h3 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  h4 {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

export default function PageLayout({ children }) {
  return (
    <>
      <Content>{children}</Content>
    </>
  );
}
