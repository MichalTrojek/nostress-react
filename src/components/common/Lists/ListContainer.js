import styled from 'styled-components';

const ListContainer = styled.div`
  /* padding: 1rem 0;
  display: flex;
  flex-wrap: wrap; */

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  grid-auto-rows: 1fr;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(32%, 1fr));
  }
`;

export default ListContainer;
