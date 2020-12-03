import styled from 'styled-components';

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
    padding-top: 1rem;
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

  function renderList() {
    return props.items.map((item, index) => {
      return (
        <li key={item.id}>
          {`${item.name}`}{' '}
          <span style={{ color: 'var(--color-tertiary)' }}>
            {`${item.price},-`}{' '}
          </span>{' '}
          <span style={{ whiteSpace: 'nowrap' }}>{`(${item.alergens})`}</span>
        </li>
      );
    });
  }

  return (
    <>
      <StyledMenu>
        <div className="menu-row">
          <h1>{renderHeader()} </h1>
          <img src={props.icon} alt="menu-icon" />
        </div>
        <ol>{renderList()}</ol>
      </StyledMenu>
    </>
  );
};

export default MealList;
