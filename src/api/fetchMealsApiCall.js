import { db } from '../firebase';

function fetchMealsApiCall() {
  const promise = db
    .collection('meals')
    .get()
    .then((snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          text: doc.data().text,
        });
      });
      return data;
    });

  return promise;
}

export default fetchMealsApiCall;
