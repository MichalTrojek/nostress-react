import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import resetOrders from '../../../redux/actions/order/resetOrders';
import fetchData from '../../../redux/actions/data/fetchData';

import PageLayout from '../../PageLayout';

import FoodAndBeverage from './components/FoodAndBeverage';
import BussinessHours from './components/BussinessHours';
import PublicNavBar from './components/PublicNavBar';
import MealsMenus from './components/MealsMenus';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import News from './components/News';

import { SkeletonTheme } from 'react-loading-skeleton';

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
        <div>
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Hero />
            <MealsMenus />
            <FoodAndBeverage />
            <News />
            <BussinessHours />
            <Contact />
            <Footer />
          </SkeletonTheme>
        </div>
      </CSSTransition>
    </PageLayout>
  );
};

export default connect(null, { resetOrders, fetchData })(Home);
