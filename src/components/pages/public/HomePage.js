import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import resetOrders from '../../../redux/actions/orders/resetOrders';

import PageLayout from '../../PageLayout';

import FoodAndBeverage from '../../layouts/public/FoodAndBeverage';
import BussinessHours from '../../layouts/public/BussinessHours';
import PublicNavBar from '../../layouts/public/PublicNavBar';
import MealsMenus from '../../layouts/public/MealsMenus';
import Contact from '../../layouts/public/Contact';
import Footer from '../../layouts/public/Footer';
import Hero from '../../layouts/public/Hero';
import News from '../../layouts/public/News';

import { motion } from 'framer-motion';

const Home = ({ resetOrders }) => {
  useEffect(() => {
    resetOrders();
  }, [resetOrders]);

  const containerVariants = {
    hidden: { y: '100vh' },
    visible: {
      y: 0,
      transition: { delay: 0, duration: 0.5 },
    },
  };

  return (
    <PageLayout>
      <PublicNavBar />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Hero />
        <MealsMenus />
        <FoodAndBeverage />
        <News />
        <BussinessHours />
        <Contact />
        <Footer />
      </motion.div>
    </PageLayout>
  );
};

export default connect(null, { resetOrders })(Home);
