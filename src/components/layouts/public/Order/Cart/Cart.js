import styled from 'styled-components';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const CartContainer = styled.div`
  border: 1px solid var(--color-tertiary);
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 1rem;

  .name {
    grid-row: 1 / span 1;
    grid-column: 2 / span 10;
  }

  .amount {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
  }
  .price {
    grid-row: 1 / span 1;
    grid-column: 12 / span 1;
  }
`;

const CartHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 0.2rem 1rem;
  border-bottom: 1px solid var(--color-tertiary);
  .name {
    grid-row: 1 / span 1;
    grid-column: 2 / span 10;
  }

  .amount {
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
    /* padding-left: 0.3rem; */
  }

  .price {
    grid-row: 1 / span 1;
    grid-column: 12 / span 1;
  }
`;

const Cart = ({ items = [] }) => {
  return (
    <CartContainer>
      <CartHeader>
        <p className="amount">ks</p>
        <p className="name">Název</p>
        <p className="price">Cena/kus</p>
      </CartHeader>
      {items.length > 0 ? renderItems() : <p>Prázdný</p>}
    </CartContainer>
  );

  function renderItems() {
    return items.map((item, index) => {
      return (
        <CartItem key={index}>
          <p className="name">{item.name}</p>
          <p className="amount"> {item.amount}</p>
          <p className="price"> {item.price},-</p>
          {/* <p>Celkem: {Number(item.price) * Number(item.amount)}</p> */}
        </CartItem>
      );
    });
  }
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.order.items,
  };
}

export default connect(mapStateToProps, {})(Cart);
