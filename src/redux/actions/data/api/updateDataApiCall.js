import { db } from '../../../../firebase';

function updateDataApiCall(data) {
  return db
    .collection('nostress')
    .doc('data')
    .set(data, { merge: true })
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.log(`Error thrown while updating hours. ${error}`);
      return false;
    });
}

export default updateDataApiCall;
