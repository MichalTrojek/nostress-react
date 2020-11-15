import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Content = styled.main`
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 16px;
  box-sizing: border-box;

  h1,
  h2,
  h3,
  h4 {
    font-family: var(--font-primary);
    color: var(--color-primary);
  }

  h1 {
    font-size: 6.4rem;
    font-weight: 900;
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
      <Header />
      <Content>{children}</Content>
    </>
  );
}
