import { db } from '../firebase';

function fetchNewsApiCall() {
  const promise = db
    .collection('news')
    .get()
    .then((snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push(doc.data());
      });
      return data;
    });

  return promise;
}

export default fetchNewsApiCall;
