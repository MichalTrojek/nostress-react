import styled from 'styled-components';

const StickyCartStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  padding: 2rem 1rem 2rem 1rem;
  height: 5rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  font-size: 1.6rem;
  font-weight: bold;
`;

const StickyCart = ({ setShowSummary }) => {
  return (
    <StickyCartStyle onClick={handleClick}>
      <span className="sticky-cart__amount">8</span>
      <span className="sticky-cart__button">Pokračovat k objednávce</span>
      <span className="sticky-cart__total-price">1546,00 Kč</span>
    </StickyCartStyle>
  );

  function handleClick() {
    window.scrollTo(0, 0);

    setShowSummary(true);
  }
};

export default StickyCart;
