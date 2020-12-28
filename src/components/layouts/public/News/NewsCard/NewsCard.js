import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const NewsContainer = styled.div`
  display: grid;
  grid-template-rows: 25vh 1fr;
  grid-template-columns: repeat(12, 1fr);

  background-color: white;
  border-radius: 5px;
  margin-bottom: 3rem;
  margin-left: 1rem;
  margin-right: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  min-height: ${(props) => props.maxHeight}px;

  .cardImage {
    grid-row: 1 / span 1;
    grid-column: 1/ -1;
    width: 100%;
    height: 25vh;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .content {
    grid-row: 2 / span 1;
    grid-column: 1/ -1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
  }

  .cardHeading {
    color: black;
    hyphens: auto;
  }

  .text {
    color: black;
    padding-top: 2rem;
    hyphens: auto;
  }

  @media only screen and (min-width: 768px) {
    .content {
      .cardHeading {
        font-size: 2.5rem;
      }

      .text p {
        font-size: 2.2rem;
      }
    }
  }

  @media only screen and (min-width: 1200px) {
  }
`;

const NewsCard = ({ card, maxHeight, setMaxHeight }) => {
  const currentElement = useRef(null);

  useEffect(() => {
    if (maxHeight < currentElement.current.clientHeight) {
      setMaxHeight(currentElement.current.clientHeight);
    }
  }, [maxHeight]);

  return (
    <NewsContainer maxHeight={maxHeight} ref={currentElement}>
      <img
        className="cardImage"
        src={card.image.fileUrl}
        alt="obrazek novinky"
      />

      <div className="content">
        <h2 className="cardHeading">{card.heading}</h2>
        <div
          className="text"
          dangerouslySetInnerHTML={{
            __html: card.content,
          }}
        ></div>
      </div>
    </NewsContainer>
  );
};

export default NewsCard;
