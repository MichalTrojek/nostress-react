import { db } from '../../firebase';

function fetchSoupsApiCall() {
  return db
    .collection('soups')
    .doc('allSoups')
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        console.log('Document does not exists');
        return undefined;
      }
    })
    .catch((error) => {
      console.log(`Error while fetching soups ${error}`);
    });
}

export default fetchSoupsApiCall;
