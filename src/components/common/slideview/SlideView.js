import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import StyledButton from '../button/Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slideview.css';
import { useRouteMatch } from 'react-router-dom';
const SlideViewWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const Page = styled.div`
  max-width: inherit;
  height: 85vh;
  color: var(--color-primary);
  padding: 2rem;
`;

class SlideView extends React.Component {
  constructor(props) {
    super(props);
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
      <SlideViewWrapper>
        <Slider {...settings}>
          {this.props.items.map((item, index) => {
            return (
              <Page key={index}>
                <h1>{item.header}</h1>
                <p>{item.content}</p>
                <StyledButton text={item.button} />
              </Page>
            );
          })}
        </Slider>
      </SlideViewWrapper>
    );
  }
}

export default SlideView;
