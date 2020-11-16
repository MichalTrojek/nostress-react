import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slideview.css';
const SlideViewWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const Page = styled.div`
  max-width: inherit;
  height: 80vh;
  color: red;
`;

class SlideView extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToSrroll: 1,
      dotsClass: 'button__bar',
      arrows: false,
    };

    return (
      <SlideViewWrapper>
        <Slider {...settings}>
          <Page>Page one</Page>
          <Page>Page two</Page>
          <Page>Page three</Page>
        </Slider>
      </SlideViewWrapper>
    );
  }
}

export default SlideView;
