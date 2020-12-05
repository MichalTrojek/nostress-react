import styled from 'styled-components';

const timeTableData = [
  {
    day: 'Pondělí',
    hours: '8:00 – 20:00',
  },
  {
    day: 'Úterý',
    hours: '8:00 – 20:00',
  },
  {
    day: 'Středa',
    hours: '8:00 – 20:00',
  },
  {
    day: 'Čtvrtek',
    hours: '8:00 – 20:00',
  },
  {
    day: 'Pátek',
    hours: '8:00 – 20:00',
  },
  {
    day: 'Sobota',
    hours: '11:00 – 20:00',
  },
  {
    day: 'Neděle',
    hours: 'zavřeno',
  },
];

const OpenHoursContainer = styled.div`
  display: grid;
  grid-template-rows: max-content;
  grid-template-columns: max-content max-content;
  grid-column-gap: 5rem;
  .hours {
    color: var(--color-tertiary);
  }
`;

const OpenHours = () => {
  return <OpenHoursContainer>{renderTimeTable()}</OpenHoursContainer>;

  function renderTimeTable() {
    return timeTableData.map((item, index) => {
      return (
        <>
          <p>{item.day}</p>
          <p className="hours">{item.hours}</p>
        </>
      );
    });
  }
};

export default OpenHours;
