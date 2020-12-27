import styled from 'styled-components';

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 3rem;
  margin-left: 1rem;
  margin-right: 1rem;

  max-width: 45rem;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    max-width: 100%;
    height: auto;
  }

  .content {
    padding: 1rem;
    h2 {
      color: black;
      padding: 1rem 0;
    }

    p {
      color: black;
      hyphens: auto;
    }
  }
`;

const NewsCard = ({ card }) => {
  return (
    <NewsContainer>
      <img src={card.fileUrl} alt="obrazek novinky" />
      <div className="content">
        <h2>{card.heading}</h2>
        <p>{card.content}</p>
      </div>
    </NewsContainer>
  );
};

export default NewsCard;
