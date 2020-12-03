import React from 'react';
import styled from 'styled-components';

const Content = styled.main`
  box-sizing: border-box;
  // margin-top: 8rem;

  h1,
  h2,
  h3,
  h4 {
    color: var(--color-primary);
  }

  @media only screen and (min-width: 320px) {
    h1 {
      font-size: 2rem;
    }

    p,
    li {
      font-size: 1.5rem;
    }
  }

  @media only screen and (min-width: 360px) {
    h1 {
      font-size: 2.6rem;
    }

    p,
    li {
      font-size: 1.7rem;
    }
  }

  @media only screen and (min-width: 411px) {
    h1 {
      font-size: 2.8rem;
    }

    p,
    li {
      font-size: 1.9rem;
    }
  }

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 4rem;
    }

    p,
    li {
      font-size: 2.2rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    h1 {
      font-size: 7rem;
    }

    p,
    li {
      font-size: 2.5rem;
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
