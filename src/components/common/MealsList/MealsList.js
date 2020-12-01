import styled from 'styled-components';
import menuIcon from '../../../img/menu-icon.png';

const StyledMenu = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid var(--color-primary);

  .menu-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ol {
    list-style-position: inside;
  }
`;

const MealList = (props) => {
  function renderHeader() {
    let header;
    props.info
      ? (header = `${props.header} - ${props.info}`)
      : (header = props.header);
    return header;
  }

  return (
    <>
      <StyledMenu>
        <div className="menu-row">
          <h1>{renderHeader()} </h1>
          <img src={menuIcon} alt="menu-icon" />
        </div>
        <ol>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ol>
      </StyledMenu>
    </>
  );
};

export default MealList;
