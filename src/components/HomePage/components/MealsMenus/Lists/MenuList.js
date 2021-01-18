import styled from 'styled-components';

const MenuList = styled.div`
  padding: 1rem;
  border: 1px solid var(--color-primary);

  .menu-row {
    display: flex;
    justify-content: space-between;
  }

  ol {
    padding-top: 1rem;
    padding-left: 1.4rem;

    @media only screen and (min-width: 375px) {
      padding-left: 1.8rem;
    }

    @media only screen and (min-width: 414px) {
      padding-left: 2rem;
    }

    @media only screen and (min-width: 768px) {
      padding-left: 2.5rem;
    }
  }

  ul {
    list-style-type: none;
  }
`;

export default MenuList;
