import React from 'react';
import PageLayout from '../PageLayout';

import Navbar from '../common/Navbar/';
import Hero from '../common/Hero/';
import MealsMenus from '../MealsMenus';
import Contact from '../common/Contact';

import BussinessHours from '../common/BussinessHours';

const Home = () => {
  return (
    <PageLayout>
      <Navbar />
      <Hero />
      <MealsMenus />
      <BussinessHours />
      <Contact />
    </PageLayout>
  );
};

export default Home;
