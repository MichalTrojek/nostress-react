import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: blue;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;

  left: 0;
  transition: transform 0.3s ease-in-out;

  transform: translateX(-100%);

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: green;
    }
  }

  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`;

const SideMenu = ({ open }) => {
  //  top: ${document.querySelector('.header').clientHeight};
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Pricing
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </a>
    </StyledMenu>
  );
};
export default SideMenu;
