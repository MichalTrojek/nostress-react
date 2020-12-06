import React from 'react';
import PageLayout from '../PageLayout';

import Navbar from '../common/Navbar/';
import Hero from '../common/Hero/';
import MealsMenus from '../MealsMenus';
import BussinessHours from '../common/BussinessHours';
import Contact from '../common/Contact';
import Footer from '../Footer';

const Home = () => {
  return (
    <PageLayout>
      <Navbar />
      <Hero />
      <MealsMenus />
      <BussinessHours />
      <Contact />
      <Footer />
    </PageLayout>
  );
};

export default Home;
