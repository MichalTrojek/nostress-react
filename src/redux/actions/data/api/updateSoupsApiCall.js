import { db } from '../../../../firebase';

function updateSoupsApiCall(soups) {
  return db
    .collection('nostress')
    .doc('data')
    .set(soups, { merge: true })
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.log(`Error thrown while updating soups. ${error}`);
      return false;
    });
}

export default updateSoupsApiCall;
