import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Row = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

export default Row;
