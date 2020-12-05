import React from 'react';
import PageLayout from '../common/PageLayout';

import Navbar from '../common/Navbar/';
import Hero from '../common/Hero/';
import MealsMenus from '../common/MealsMenus';

import BussinessHours from '../common/BussinessHours';

const Home = () => {
  return (
    <PageLayout>
      <Navbar />
      <Hero />
      <MealsMenus />
      <BussinessHours />
    </PageLayout>
  );
};

export default Home;
