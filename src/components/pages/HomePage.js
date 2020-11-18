import React, { useRef } from 'react';
import PageLayout from '../common/PageLayout';
import Hero from '../common/hero/Hero';
import Menu from '../common/menu/Menu';

const Home = () => {
  return (
    <PageLayout>
      <Hero />
      <Menu />
    </PageLayout>
  );
};

export default Home;
