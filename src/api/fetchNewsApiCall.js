import { db } from '../firebase';

function fetchNewsApiCall() {
  const promise = db
    .collection('news')
    .get()
    .then((snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          heading: doc.data().heading,
          content: doc.data().content,
        });
      });
      return data;
    });

  return promise;
}

export default fetchNewsApiCall;
