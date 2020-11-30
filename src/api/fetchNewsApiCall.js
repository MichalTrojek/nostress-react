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
          content: JSON.parse(doc.data().content),
          button: doc.data().button,
        });
      });
      return data;
    });

  return promise;
}

export default fetchNewsApiCall;
