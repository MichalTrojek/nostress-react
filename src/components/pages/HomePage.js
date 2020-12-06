import React from 'react';
import PageLayout from '../PageLayout';

import Navbar from '../layouts/Navbar/';
import Hero from '../layouts/Hero/';
import MealsMenus from '../layouts/MealsMenus';
import FoodAndBeverage from '../layouts/FoodAndBeverage';
import BussinessHours from '../layouts/BussinessHours';
import Contact from '../layouts/Contact';
import Footer from '../layouts/Footer';

const Home = () => {
  return (
    <PageLayout>
      <Navbar />
      <Hero />
      <MealsMenus />
      <FoodAndBeverage />
      <BussinessHours />
      <Contact />
      <Footer />
    </PageLayout>
  );
};

export default Home;
