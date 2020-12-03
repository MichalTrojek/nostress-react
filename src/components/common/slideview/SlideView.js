import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import StyledButton from '../Button/Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slideview.css';

import SlideViewPage from '../SlideViewPage';

const SlideViewWrapper = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

const SliderStyled = styled(Slider)``;

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
      <>
        <SlideViewWrapper>
          <SliderStyled {...settings}>
            {this.props.items.map((item, index) => {
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
            })}
          </SliderStyled>
        </SlideViewWrapper>
      </>
    );
  }
}

export default SlideView;
