import React from 'react';
import styled from 'styled-components';

const Content = styled.main`
  box-sizing: border-box;
  margin-top: 8rem;

  h1,
  h2,
  h3,
  h4 {
    color: var(--color-primary);
  }

  @media only screen and (min-width: 320px) {
    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1.3rem;
    }
  }

  @media only screen and (min-width: 360px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media only screen and (min-width: 411px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

export default function PageLayout({ children }) {
  return (
    <>
      <Content>{children}</Content>
    </>
  );
}
