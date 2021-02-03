import { db } from '../../../../firebase';

function setOrderingStatusApiCall(status) {
  return db
    .collection('systemstatus')
    .doc('ordering')
    .update({ status: status })
    .then(() => {
      console.log(`Ordering status was update to ${status}`);
      return true;
    })
    .catch((error) => {
      console.log(`Error while saving ordering status. Erorr: ${error}`);
      return false;
    });
}

export default setOrderingStatusApiCall;
