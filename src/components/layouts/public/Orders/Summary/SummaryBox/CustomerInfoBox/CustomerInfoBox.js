import styled from 'styled-components';

const CustomerInfoBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1/ -1;
  grid-row: 2 / span 1;
`;

const CustomerInfoBox = ({ name, email, phoneNumber }) => {
  return (
    <CustomerInfoBoxStyle>
      <p>Jmeno: {name}</p>
      <p>Email: {email}</p>
      <p>Telefon: {phoneNumber}</p>
    </CustomerInfoBoxStyle>
  );
};

export default CustomerInfoBox;
