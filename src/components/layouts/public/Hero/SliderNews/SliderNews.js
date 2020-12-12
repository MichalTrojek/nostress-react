import React from 'react';
import Slider from 'react-slick';

import OpenHours from '../../../../common/OpenHours';
import Button from '../../../../common/Button';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderNews.css';

import SlideNews from './SlideNews';
import Wrapper from '../../../../common/Wrapper';

const SliderNews = ({ items }) => {
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
        <h1>Máme znovu otevřeno. Těšíme se na Vás.</h1>
        <OpenHours />
        <Button primary>Objednat</Button>
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
          <Button primary>{item.button}</Button>
        </SlideNews>
      );
    });
  }
};

export default SliderNews;
