import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Wrapper from '../../../../common/Wrapper';
import NewsCard from '../NewsCard';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './slideview.css';

import { connect } from 'react-redux';

import fetchCards from '../../../../../redux/actions/news/card/fetchCards';

const NewsSliderWrapper = styled(Wrapper)`
  padding: 0 0;
`;

const NewsSlider = ({ cards, fetchCards }) => {
  const [numberOfSlidesShown, setNumberOfSlidesShown] = useState(1);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    fetchCards();
    handleResize();
    window.addEventListener('resize', handleResize);
    function handleResize() {
      const innerWidth = window.innerWidth;
      if (innerWidth < 767) {
        setNumberOfSlidesShown(1);
      } else if (innerWidth >= 768 && innerWidth < 1200) {
        setNumberOfSlidesShown(2);
      } else if (innerWidth >= 1200) {
        setNumberOfSlidesShown(3);
      }
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [fetchCards]);

  const settings = {
    dots: true,
    infinite: cards.length >= numberOfSlidesShown,
    speed: 500,
    slidesToShow: numberOfSlidesShown,
    slidesToSrroll: 1,
    dotsClass: 'button__bar',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    // variableWidth: true,
  };

  return (
    <NewsSliderWrapper>
      <Slider {...settings}>
        {cards.map((card, index) => {
          return (
            <NewsCard
              setMaxHeight={setMaxHeight}
              maxHeight={maxHeight}
              key={index}
              card={card}
            />
          );
        })}
      </Slider>
    </NewsSliderWrapper>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { cards } = state;
  return { cards };
};

export default connect(mapStateToProps, { fetchCards })(NewsSlider);
