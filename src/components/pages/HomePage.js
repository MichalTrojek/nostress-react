import React, { useRef } from 'react';
import PageLayout from '../common/PageLayout';
import Hero from '../common/hero/Hero';
import Menu from '../common/menu/Menu';
import Navigation from '../common/navbar/Navigation';

const Home = () => {
  return (
    <PageLayout>
      <Navigation />
      <Hero />
      <Menu />
    </PageLayout>
  );
};

export default Home;
