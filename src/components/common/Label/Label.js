import styled from 'styled-components';

const StyledDate = styled.div`
  background-color: var(--color-quaternary);
  padding: 1rem;
  border-radius: 3px;
  font-weight: bold;
`;

const WeeklyDate = (props) => {
  return (
    <>
      <StyledDate>
        <p>{props.text}</p>
      </StyledDate>
    </>
  );
};

export default WeeklyDate;
