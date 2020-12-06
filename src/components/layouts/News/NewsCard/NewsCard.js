import styled from 'styled-components';

import image from './../../../../img/healthyfood.jpg';

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;

  margin-bottom: 3rem;

  margin-left: 1rem;
  margin-right: 1rem;

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

const newsData = {
  header: 'Vyzkoušejte naši novou snídaňovou nabídku!',
  content: `Nově Vám u nás nabídneme výborné snídaňové menu. Vyvážená a vydatná snídaně je základ každého úspěšného dne.
  Naše snídaně jsou jen z kvalitních surovin a čerstvě připravené.
  Naše snídaně Vám DOVEZEME až domů nebo do firmy nebo vydáme TAKE AWAY ve výdejním okénku.  A to vždy Pondělí – Pátek 8:00 – 10:30.
  Objednávejte telefonicky na 732 161 372`,
};

const NewsCard = () => {
  return (
    <NewsContainer>
      <img src={image} alt="news image" />
      <div className="content">
        <h2>{newsData.header}</h2>
        <p>{newsData.content}</p>
      </div>
    </NewsContainer>
  );
};

export default NewsCard;
