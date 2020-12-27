import styled from 'styled-components';

const NewsContainer = styled.div`
  display: grid;
  grid-template-rows: max-content max-content 1fr;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 1rem;

  background-color: white;
  border-radius: 5px;
  margin-bottom: 3rem;
  margin-left: 1rem;
  margin-right: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  .cardImage {
    grid-row: 1 / span 1;
    grid-column: 1 / -1;
    max-width: 100%;
    height: auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .cardHeading {
    padding: 0 1rem;
    grid-row: 2 / span 1;
    grid-column: 1/ -1;
    color: black;
    hyphens: auto;
  }

  .cardContent {
    padding: 1rem 1rem;
    grid-row: 3 / span 1;
    grid-column: 1/ -1;
    hyphens: auto;
    color: black;
  }

  @media only screen and (min-width: 768px) {
    .cardHeading {
      font-size: 2rem;
    }

    p {
      font-size: 2rem;
    }
  }
`;

const NewsCard = ({ card }) => {
  return (
    <NewsContainer>
      <img className="cardImage" src={card.fileUrl} alt="obrazek novinky" />

      <h2 className="cardHeading">{card.heading}</h2>
      <div
        className="cardContent"
        dangerouslySetInnerHTML={{
          __html: card.content,
        }}
      ></div>
    </NewsContainer>
  );
};

export default NewsCard;
