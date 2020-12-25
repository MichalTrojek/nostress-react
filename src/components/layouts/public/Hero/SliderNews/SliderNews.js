import React from 'react';
import Slider from 'react-slick';

import OpenHours from '../../../../common/OpenHours';
import Button from '../../../../common/Button';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderNews.css';

import SlideNews from './SlideNews';
import Wrapper from '../../../../common/Wrapper';

import { connect } from 'react-redux';
import startOrdering from '../../../../../redux/actions/orders/startOrdering';
import { useHistory } from 'react-router-dom';

const SliderNews = ({ items, startOrdering }) => {
  const history = useHistory();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToSrroll: 1,
    dotsClass: 'button__bar',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Wrapper>
      <Slider {...settings}>{renderNewsSlides()}</Slider>
    </Wrapper>
  );

  function renderNewsSlides() {
    const pages = createNewsSlide();
    pages.unshift(
      <SlideNews key={654646}>
        <h1>Máme otevřeno. Těšíme se na Vás.</h1>
        <OpenHours />
        <Button primary onClick={() => handleStartingOrder('MainMenu')}>
          Objednat
        </Button>
      </SlideNews>
    );
    return pages;
  }

  function createNewsSlide() {
    return items.map((item, index) => {
      return (
        <SlideNews key={index}>
          <h1>{item.heading}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: item.content,
            }}
          ></div>
          {renderButton(item)};
        </SlideNews>
      );
    });
  }

  function renderButton(item) {
    if (item.buttonPath === 'MainMenu') {
      return (
        <Button primary onClick={() => handleStartingOrder(item.buttonPath)}>
          {item.button}
        </Button>
      );
    } else if (item.buttonPath === 'BreakfastMenu') {
      return (
        <Button primary onClick={() => handleStartingOrder(item.buttonPath)}>
          {item.button}
        </Button>
      );
    } else if (item.buttonPath === 'website') {
      return (
        <Button primary onClick={() => openInNewTab(item.websiteLink)}>
          {item.button}
        </Button>
      );
    }
  }

  function handleStartingOrder(menuType) {
    console.log('render button', menuType);
    window.scrollTo(0, 0);
    history.push('/order');
    startOrdering({ status: true, menuType: menuType });
  }

  function openInNewTab(url) {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  }
};

export default connect(null, { startOrdering })(SliderNews);
