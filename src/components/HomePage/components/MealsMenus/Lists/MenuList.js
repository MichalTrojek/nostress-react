import styled from 'styled-components';

const MenuList = styled.div`
  padding: 1.5rem 1.3rem 1.5rem 1.5rem;
  border: 1px solid var(--color-primary);

  @media only screen and (min-width: 1400px) {
    padding: 2rem 2rem 2rem 2rem;
  }

  .menu-row {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 0 1rem;

    .menu-info {
      margin-left: 1.5rem;
    }
  }

  ol {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.7rem;

    @media only screen and (min-width: 375px) {
      padding-left: 2.5rem;
    }

    @media only screen and (min-width: 768px) {
      padding-left: 3rem;
    }

    li {
      padding-top: 1rem;
      @media only screen and (min-width: 1400px) {
        padding-top: 1.5rem;
      }
    }
  }

  ul {
    list-style-type: none;
  }
`;

export default MenuList;
