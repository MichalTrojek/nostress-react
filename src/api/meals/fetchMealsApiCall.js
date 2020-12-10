import { db } from '../../firebase';

function fetchMealsApiCall() {
  const promise = db
    .collection('meals')
    .get()
    .then((snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        console.log(doc.id);
        data.push({
          id: doc.id,
          name: doc.data().name,
          alergens: doc.data().alergens,
          price: doc.data().price,
        });
      });
      return data;
    });

  return promise;
}

export default fetchMealsApiCall;
