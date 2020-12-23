import React from 'react';

import PageLayout from '../../PageLayout';

import FoodAndBeverage from '../../layouts/public/FoodAndBeverage';
import BussinessHours from '../../layouts/public/BussinessHours';
import PublicNavBar from '../../layouts/public/PublicNavBar';
import MealsMenus from '../../layouts/public/MealsMenus';
import Contact from '../../layouts/public/Contact';
import Footer from '../../layouts/public/Footer';
import Hero from '../../layouts/public/Hero';
import News from '../../layouts/public/News';

const Home = () => {
  return (
    <PageLayout>
      <PublicNavBar />
      <Hero />
      <MealsMenus />
      <FoodAndBeverage />
      <News />
      <BussinessHours />
      <Contact />
      <Footer />
    </PageLayout>
  );
};

export default Home;