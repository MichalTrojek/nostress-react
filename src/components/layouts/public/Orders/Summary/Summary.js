import styled from 'styled-components';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Form from '../../../../common/Forms/Form';
import FormGroup from '../../../../common/Forms/FormGroup';
import Button from '../../../../common/Button';

import saveCustomerInfo from '../../../../../redux/actions/orders/saveCustomerInfo';

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
const Summary = ({ items = [], totalPrice, saveCustomerInfo }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (items.length === 0) {
      history.push('/');
    }
  }, [items, history]);

  return (
    <>
      <h1>Souhrn objednávky</h1>
      <SummaryBox>
        <p>Jmeno: {name}</p>
        <p>Email: {email}</p>
        <p>Telefon: {phoneNumber}</p>
        {renderOrderedItems()}
        <p className="totalPrice">Cena celkem: {totalPrice},-</p>
      </SummaryBox>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <input
            type="text"
            placeholder="Jméno"
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="mondayInput"
            required
          />
          <label htmlFor="mondayInput">Jméno</label>
        </FormGroup>
        <FormGroup>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="mondayInput"
            required
          />
          <label htmlFor="mondayInput">Email</label>
        </FormGroup>
        <FormGroup>
          <input
            type="text"
            placeholder="Telefon"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            id="mondayInput"
            required
          />
          <label htmlFor="mondayInput">Telefon</label>
        </FormGroup>
        <Button primary type="submit">
          objednat
        </Button>
      </Form>
    </>
  );

  function renderOrderedItems() {
    return items.map((item, index) => {
      return (
        <OrderedBox key={index}>
          <p className="name">{item.name}</p>
          <p className="amount">{item.amount} x </p>
          <p className="price">{item.price},-</p>
        </OrderedBox>
      );
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveCustomerInfo({
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      text: '',
    });
    console.log(name);
    console.log(phoneNumber);
    console.log(email);
  }
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.order.items,
    totalPrice: state.order.totalPrice,
  };
}

export default connect(mapStateToProps, { saveCustomerInfo })(Summary);
