import styled from 'styled-components';

const StyledInfoLabel = styled.div`
  border-color: var(--color-tertiary);
  text-align: center;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
  background-color: red;
  font-size: 2rem;
  margin-top: 2rem;
`;

const InfoLabel = (props) => {
  return <StyledInfoLabel>{props.text}</StyledInfoLabel>;
};

export default InfoLabel;
