import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import resetOrders from '../../../OrderingSystem/redux/actions/resetOrders';
import fetchData from '../../../redux/actions/data/fetchData';

import PageLayout from '../../PageLayout';

import FoodAndBeverage from '../../layouts/public/FoodAndBeverage';
import BussinessHours from '../../layouts/public/BussinessHours';
import PublicNavBar from '../../layouts/public/PublicNavBar';
import MealsMenus from '../../layouts/public/MealsMenus';
import Contact from '../../layouts/public/Contact';
import Footer from '../../layouts/public/Footer';
import Hero from '../../layouts/public/Hero';
import News from '../../layouts/public/News';

import { CSSTransition } from 'react-transition-group';
import './HomePage.css';

const Home = ({ resetOrders, fetchData }) => {
  useEffect(() => {
    resetOrders();
  }, [resetOrders]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <PageLayout>
      <PublicNavBar />
      <CSSTransition
        in={true}
        classNames="homePage-"
        timeout={1000}
        appear={true}
      >
        <div className="test">
          <Hero />
          <MealsMenus />
          <FoodAndBeverage />
          <News />
          <BussinessHours />
          <Contact />
          <Footer />
        </div>
      </CSSTransition>
    </PageLayout>
  );
};

export default connect(null, { resetOrders, fetchData })(Home);
