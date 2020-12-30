import { db } from '../../../../firebase';

function updateHoursApiCall(hours) {
  return db
    .collection('nostress')
    .doc('data')
    .set(hours, { merge: true })
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.log(`Error thrown while updating hours. ${error}`);
      return false;
    });
}

export default updateHoursApiCall;
