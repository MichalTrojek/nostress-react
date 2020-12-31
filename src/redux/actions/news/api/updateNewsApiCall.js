import { db } from '../../../../firebase';

function updateNewsApiCall(allNews) {
  return db
    .collection('nostress')
    .doc('data')
    .set({ news: allNews }, { merge: true })
    .then(() => {
      return true;
    })
    .catch((error) => {
      console.log(`Error while updating news. ${error}`);
    });
}

export default updateNewsApiCall;
