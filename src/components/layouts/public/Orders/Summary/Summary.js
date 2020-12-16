import { connect } from 'react-redux';

const Summary = () => {
  return (
    <>
      <h1>Souhrn objednávky</h1>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    items: state.order.items,
  };
}

export default connect(mapStateToProps)(Summary);
