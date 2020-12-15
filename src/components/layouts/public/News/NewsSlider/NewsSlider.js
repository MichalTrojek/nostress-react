import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Wrapper from '../../../../common/Wrapper';
import NewsCard from '../NewsCard';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './slideview.css';

const NewsSliderWrapper = styled(Wrapper)`
  padding: 0 0;
`;

const NewsSlider = () => {
  const [numberOfSlidesShown, setNumberOfSlidesShown] = useState(1);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    function handleResize() {
      const innerWidth = window.innerWidth;
      if (innerWidth < 540) {
        setNumberOfSlidesShown(1);
      } else if (innerWidth >= 540 && innerWidth < 1000) {
        setNumberOfSlidesShown(2);
      } else if (innerWidth >= 1000) {
        setNumberOfSlidesShown(3);
      }
    }

    return function cleanup() {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: numberOfSlidesShown,
    slidesToSrroll: 1,
    dotsClass: 'button__bar',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <NewsSliderWrapper>
      <Slider {...settings}>
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Slider>
    </NewsSliderWrapper>
  );
};

export default NewsSlider;
