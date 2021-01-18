import styled from 'styled-components';

const SlideNews = styled.div`
  /* color: var(--color-primary); */
  /* padding: 1rem; */
  /* display: flex !important; */
  /* flex-direction: column; */
  /* justify-content: space-between; */
  /* min-height: 100%; */

  p {
    hyphens: auto;
  }

  @media only screen and (min-width: 768px) {
    padding: 1rem 2rem;

    button {
      align-self: flex-end;
      padding: 4rem;
    }
  }
`;

export default SlideNews;
