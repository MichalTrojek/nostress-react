import React from 'react';
import PageLayout from '../PageLayout';

import PublicNavBar from '../layouts/public/PublicNavBar/';
import Hero from '../layouts/public/Hero/';
import MealsMenus from '../layouts/public/MealsMenus';
import FoodAndBeverage from '../layouts/public/FoodAndBeverage';
import News from '../layouts/public/News';
import BussinessHours from '../layouts/public/BussinessHours';
import Contact from '../layouts/public/Contact';
import Footer from '../layouts/public/Footer';

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
