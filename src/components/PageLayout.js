import React from 'react';
import styled from 'styled-components';

const Content = styled.main`
  box-sizing: border-box;
  background-color: black;
`;

export default function PageLayout({ children }) {
  return (
    <>
      <Content>{children}</Content>
    </>
  );
}
