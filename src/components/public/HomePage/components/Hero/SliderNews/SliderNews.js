import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import OpenHours from '../../../../../common/OpenHours';
import Button from '../../../../../common/Button';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderNews.css';

import SlideNews from './SlideNews';

import { connect } from 'react-redux';
import startOrdering from '../../../../../../redux/actions/orders/startOrdering';
import { useHistory } from 'react-router-dom';

const SlideContent = styled.div`
  min-height: 75vh;
  max-height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 1rem 5rem 1rem;

  .slideContent__text {
    padding: 1rem 0;
  }

  .sliderContent__button {
  }

  @media only screen and (min-width: 411px) {
  }
`;

const SliderNews = ({ items = [], startOrdering }) => {
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
    switpeToSlide: true,
  };

  return <Slider {...settings}>{renderNewsSlides()}</Slider>;

  function renderNewsSlides() {
    const pages = createNewsSlide();
    pages.unshift(
      <SlideNews key={654646}>
        <SlideContent>
          <h1>Máme otevřeno. Těšíme se na Vás.</h1>
          <OpenHours />
          <Button primary onClick={() => handleStartingOrder('MainMenu')}>
            Objednat
          </Button>
        </SlideContent>
      </SlideNews>
    );
    return pages;
  }

  function createNewsSlide() {
    return items.map((item, index) => {
      return (
        <SlideNews index={index} key={index}>
          <SlideContent>
            <h1>{item.heading}</h1>
            <div
              className="slideContent__text"
              dangerouslySetInnerHTML={{
                __html: item.content,
              }}
            ></div>
            {renderButton(item)}
          </SlideContent>
        </SlideNews>
      );
    });
  }

  function renderButton(item) {
    if (item.buttonPath === 'MainMenu') {
      return (
        <Button
          className="sliderContent__button"
          primary
          onClick={() => handleStartingOrder(item.buttonPath)}
        >
          {item.button}
        </Button>
      );
    } else if (item.buttonPath === 'BreakfastMenu') {
      return (
        <Button
          className="sliderContent__button"
          primary
          onClick={() => handleStartingOrder(item.buttonPath)}
        >
          {item.button}
        </Button>
      );
    } else if (item.buttonPath === 'website') {
      return (
        <Button
          className="sliderContent__button"
          primary
          onClick={() => openInNewTab(item.websiteLink)}
        >
          {item.button}
        </Button>
      );
    }
  }

  function handleStartingOrder(menuType) {
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
