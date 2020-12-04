import React from 'react';
import PageLayout from '../common/PageLayout';

import Navbar from '../common/Navbar/';
import Hero from '../common/Hero/';
import MealsMenus from '../common/MealsMenus';

const Home = () => {
  return (
    <PageLayout>
      <Navbar />
      <Hero />
      <MealsMenus />
    </PageLayout>
  );
};

export default Home;
