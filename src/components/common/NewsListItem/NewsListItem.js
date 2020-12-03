import styled from 'styled-components';
import { connect } from 'react-redux';

import { showWarningToast } from '../../../notifications/toast';
import Button from '../Button';

import deleteNews from '../../../actions/news/deleteNews';
import setSelectedNewsToEdit from '../../../actions/news/setSelectedNewsToEdit';

const StyledNewsListItem = styled.div`
  margin-bottom: 1rem;
  padding: 2rem;
  border: 1px solid var(--color-tertiary);
  text-align: center;
  .buttons {
    margin-top: 1rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  button:first-child {
    margin-right: 1rem;
  }
`;

const NewsListItem = ({
  news,
  item,
  deleteNews,
  isEditModeEnabled,
  setSelectedNewsToEdit,
}) => {
  return (
    <StyledNewsListItem>
      <h1>{item.heading}</h1>
      <div className="buttons">
        <Button onClick={() => handleEdit(item.id)} text="Editovat"></Button>
        <Button onClick={() => handleDelete(item.id)} text="Smazat"></Button>
      </div>
    </StyledNewsListItem>
  );

  function handleEdit(id) {
    const selectedNews = news.filter((item) => item.id === id);
    setSelectedNewsToEdit(selectedNews);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleDelete(id) {
    if (!isEditModeEnabled) {
      deleteNews(id);
    } else {
      showWarningToast('Nelze mazat během editování.');
    }
  }
};

export default connect(null, { deleteNews, setSelectedNewsToEdit })(
  NewsListItem
);
