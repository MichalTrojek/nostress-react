import styled from 'styled-components';
import { connect } from 'react-redux';
import { useState } from 'react';

const SummaryBox = styled.div`
  border: 1px solid var(--color-tertiary);
  padding: 1rem;
  display: grid;
  grid-row-gap: 1rem;
  .totalPrice {
    color: var(--color-tertiary);
    font-weight: bold;
    justify-self: flex-end;
  }
`;
const OrderedBox = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: max-content;

  .amount {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  .name {
    grid-column: 2 / 11;
    grid-row: 1 / span 1;
    hyphens: auto;
  }

  .price {
    grid-column: 12/ -1;
    grid-row: 1 / span 1;
    color: var(--color-tertiary);
  }
`;
const Summary = ({ items, totalPrice }) => {
  return (
    <>
      <h1>Souhrn objednávky</h1>
      <SummaryBox>
        <p>Jmeno:</p>
        <p>Email:</p>
        <p>Adressa:</p>
        {renderOrderedItems()}
        <p className="totalPrice">Cena celkem: {totalPrice},-</p>
      </SummaryBox>
    </>
  );

  function renderOrderedItems() {
    return items.map((item) => {
      return (
        <OrderedBox>
          <p className="name">{item.name}</p>
          <p className="amount">{item.amount} x </p>
          <p className="price">{item.price},-</p>
        </OrderedBox>
      );
    });
  }
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.order.items,
    totalPrice: state.order.totalPrice,
  };
}

export default connect(mapStateToProps)(Summary);
