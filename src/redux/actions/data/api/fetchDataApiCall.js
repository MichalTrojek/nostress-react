import { db } from '../../../../firebase';

function fetchNewsApiCall() {
  const promise = db
    .collection('nostress')
    .get('data')
    .then((snapshot) => {
      let data = {};
      snapshot.forEach((doc) => {
        data = {
          news: doc.data().news || [],
          menu: doc.data().menu || [],
          soups: doc.data().soups || [],
          cards: doc.data().cards || [],
          hours: doc.data().hours,
        };
      });
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(`Error while fetching news from firestore: ${error}`);
    });

  return promise;
}

export default fetchNewsApiCall;
