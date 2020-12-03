import React, { useRef } from 'react';
import PageLayout from '../common/PageLayout';
import Hero from '../common/Hero/';
import Menu from '../common/Menu';
import Navbar from '../common/Navbar/';

const Home = () => {
  return (
    <PageLayout>
      <Navbar />
      <Hero />
      <Menu />
    </PageLayout>
  );
};

export default Home;
