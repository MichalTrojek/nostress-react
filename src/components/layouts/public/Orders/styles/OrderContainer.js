import styled from 'styled-components';
const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  Button {
    margin-top: 1rem;
  }

  @media only screen and (max-width: 411px) {
    Button {
      font-size: 1.3rem;
    }
  }
`;

export default OrderContainer;
