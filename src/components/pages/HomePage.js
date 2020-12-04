import React, { useRef } from 'react';
import PageLayout from '../common/PageLayout';
import Hero from '../common/Hero/';
import MealsMenu from '../common/MealsMenu';
import Navbar from '../common/Navbar/';

const Home = () => {
  return (
    <PageLayout>
      <Navbar />
      <Hero />
      <MealsMenu />
    </PageLayout>
  );
};

export default Home;
