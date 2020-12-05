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
    hours: '8:00 – 22:00',
  },
  {
    day: 'Sobota',
    hours: '11:00 – 22:00',
  },
  {
    day: 'Neděle',
    hours: 'zavřeno',
  },
];

const OpenHoursContainer = styled.div`
  max-width: 25rem;
  width: 25rem;
  font-weight: bold;
  .hours {
    color: var(--color-tertiary);
  }

  .openhours-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const OpenHours = () => {
  return <OpenHoursContainer>{renderTimeTable()}</OpenHoursContainer>;

  function renderTimeTable() {
    return timeTableData.map((item, index) => {
      return (
        <div className="openhours-row">
          <p>{item.day}</p>
          <p className="hours">{item.hours}</p>
        </div>
      );
    });
  }
};

export default OpenHours;
