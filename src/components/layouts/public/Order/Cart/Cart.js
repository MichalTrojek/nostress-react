import styled from 'styled-components';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import Button from '../../../../common/Button';

const CartContainer = styled.div`
  border: 1px solid var(--color-tertiary);
  Button {
  }
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 1rem;

  .name {
    grid-row: 1 / span 1;
    grid-column: 2 / span 9;
    hyphens: auto;
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
  }

  .price {
    grid-row: 1 / span 1;
    grid-column: 12 / span 1;
  }
`;

const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 1rem;

  .totalPrice {
    font-weight: bold;
    color: var(--color-tertiary);
  }
`;

const Cart = ({ items = [] }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let tempPrice = 0;
    let tempAmount = 0;
    items.forEach((item) => {
      tempPrice += Number(item.price) * Number(item.amount);
      tempAmount += Number(item.amount);
    });
    setTotalPrice(tempPrice);
    setTotalAmount(tempAmount);
  }, [items]);

  return (
    <CartContainer>
      <CartHeader>
        <p className="amount">ks</p>
        <p className="name">Název</p>
        <p className="price">Cena/kus</p>
      </CartHeader>
      {renderItems()}
      <CartFooter>
        <p>Celkem kusů: {totalAmount}</p>
        <p className="totalPrice">Celkem: {totalPrice} ,- </p>
      </CartFooter>
      <Button primary>Objednat</Button>
    </CartContainer>
  );

  function renderItems() {
    return items.map((item, index) => {
      return (
        <CartItem key={index}>
          <p className="name">{item.name}</p>
          <p className="amount"> {item.amount}</p>
          <p className="price"> {item.price},-</p>
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
