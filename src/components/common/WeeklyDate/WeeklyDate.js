import styled from 'styled-components';

const StyledDate = styled.div`
  background-color: var(--color-quaternary);
  padding: 1rem;
  border-radius: 3px;
  font-weight: bold;
`;

const WeeklyDate = () => {
  const getDateText = () => {
    const curr = new Date();

    const first = curr.getDate() - curr.getDay() + 1;
    const last = first + 4;

    const monday = new Date(curr.setDate(first))
      .toLocaleDateString()
      .slice(0, 7);
    const friday = new Date(curr.setDate(last)).toLocaleDateString();

    return `${monday} - ${friday}`;
  };

  return (
    <>
      <StyledDate>{getDateText()}</StyledDate>
    </>
  );
};

export default WeeklyDate;
