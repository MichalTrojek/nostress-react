import styled from 'styled-components';
import { connect } from 'react-redux';

const OpenHoursContainer = styled.div`
  max-width: 30rem;
  width: 30rem;
  font-weight: bold;
  .hours {
    color: var(--color-tertiary);
  }

  .openhours-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const OpenHours = ({ hours }) => {
  return (
    <OpenHoursContainer>
      {hours && (
        <>
          <div className="openhours-row">
            <p>Pondělí</p>
            <p className="hours"> {hours.monday}</p>
          </div>
          <div className="openhours-row">
            <p>Úterý</p>
            <p className="hours"> {hours.tuesday}</p>
          </div>
          <div className="openhours-row">
            <p>Středa</p>
            <p className="hours"> {hours.wednesday}</p>
          </div>
          <div className="openhours-row">
            <p>Čtvrtek</p>
            <p className="hours"> {hours.thursday}</p>
          </div>
          <div className="openhours-row">
            <p>Pátek</p>
            <p className="hours"> {hours.friday}</p>
          </div>
          <div className="openhours-row">
            <p>Sobota</p>
            <p className="hours"> {hours.saturday}</p>
          </div>
          <div className="openhours-row">
            <p>Neděle</p>
            <p className="hours"> {hours.sunday}</p>
          </div>
        </>
      )}
    </OpenHoursContainer>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    hours: state.data.hours,
  };
}

export default connect(mapStateToProps)(OpenHours);
