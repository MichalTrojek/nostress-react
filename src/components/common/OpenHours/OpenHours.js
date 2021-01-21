import styled from 'styled-components';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

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

            <p className="hours"> {hours.monday || <Skeleton />}</p>
          </div>
          <div className="openhours-row">
            <p>Úterý</p>
            <p className="hours"> {hours.tuesday || <Skeleton />}</p>
          </div>
          <div className="openhours-row">
            <p>Středa</p>
            <p className="hours"> {hours.wednesday || <Skeleton />}</p>
          </div>
          <div className="openhours-row">
            <p>Čtvrtek</p>
            <p className="hours"> {hours.thursday || <Skeleton />}</p>
          </div>
          <div className="openhours-row">
            <p>Pátek</p>
            <p className="hours"> {hours.friday || <Skeleton />}</p>
          </div>
          <div className="openhours-row">
            <p>Sobota</p>
            <p className="hours">
              {' '}
              {hours.saturday || <Skeleton duration={2} />}
            </p>
          </div>
          <div className="openhours-row">
            <p>Neděle</p>
            <p className="hours">
              {' '}
              {hours.sunday || <Skeleton duration={2} />}
            </p>
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
