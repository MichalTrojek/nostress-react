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
  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  useEffect(() => {
    fetchCards();
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
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [fetchCards]);

  const settings = {
    dots: true,
    // infinite: true,
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
          return <NewsCard key={index} card={card} />;
        })}
      </Slider>
    </NewsSliderWrapper>
  );
};

// function mapStateToProps(state, ownProps) {
//   // const cards = [];
//   // const card = {
//   //   heading: 'Vyzkoušejte naši novou snídaňovou nabídku!',
//   //   content: `Nově Vám u nás nabídneme výborné snídaňové menu. Vyvážená a vydatná snídaně je základ každého úspěšného dne.
//   //   Naše snídaně jsou jen z kvalitních surovin a čerstvě připravené.
//   //   Naše snídaně Vám DOVEZEME až domů nebo do firmy nebo vydáme TAKE AWAY ve výdejním okénku.  A to vždy Pondělí – Pátek 8:00 – 10:30.
//   //   Objednávejte telefonicky na 732 161 372`,
//   //   fileUrl:
//   //     'https://firebasestorage.googleapis.com/v0/b/nostress-a057b.appspot.com/o/cardImages%2Ffooddelivery.jpg?alt=media&token=43cbda1b-5546-453d-aaf9-4c198eb07649',
//   // };
//   // cards.push(card);
//   // cards.push(card);
//   // cards.push(card);
//   // cards.push(card);
//   return {
//     cards: state.cards,
//   };
// }

const mapStateToProps = (state, ownProps) => {
  const { cards } = state;
  return { cards };
};

export default connect(mapStateToProps, { fetchCards })(NewsSlider);
