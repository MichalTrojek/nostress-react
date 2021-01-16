import { db } from '../../../../firebase';

function fetchNewsApiCall() {
  const promise = db
    .collection('nostress')
    .get('data')
    .then((snapshot) => {
      let data = {};
      snapshot.forEach((doc) => {
        data = {
          allNews: doc.data().allNews || [],
          meals: doc.data().meals || [],
          soups: doc.data().soups || {},
          cards: doc.data().cards || [],
          hours: doc.data().hours || {},
          boxPrices: doc.data().boxPrices || {},
        };
      });
      return data;
    })
    .catch((error) => {
      console.log(`Error while fetching news from firestore: ${error}`);
    });

  return promise;
}

export default fetchNewsApiCall;
