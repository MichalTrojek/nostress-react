import React from 'react';
import Slider from 'react-slick';
import OpenHours from '../OpenHours';
import StyledButton from '../Button/Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slideview.css';

import SlideViewPage from '../SlideViewPage';
import Wrapper from '../Wrapper';

class SlideView extends React.Component {
  constructor(props) {
    super(props);
  }

  createSliderPages() {
    return this.props.items.map((item, index) => {
      return (
        <SlideViewPage key={index}>
          <h1>{item.heading}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: item.content,
            }}
          ></div>
          <StyledButton text={item.button} />
        </SlideViewPage>
      );
    });
  }

  renderSliderPages() {
    const pages = this.createSliderPages();
    pages.unshift(
      <SlideViewPage key={654646}>
        <h1>Máme znovu otevřeno. Těšíme se na Vás.</h1>
        <OpenHours />
        <StyledButton text="Objednat" />
      </SlideViewPage>
    );
    return pages;
  }

  render() {
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
      <>
        <Wrapper>
          <Slider {...settings}>{this.renderSliderPages()}</Slider>
        </Wrapper>
      </>
    );
  }
}

export default SlideView;
