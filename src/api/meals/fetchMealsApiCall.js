import { db } from '../../firebase';

function fetchMealsApiCall() {
  const promise = db
    .collection('meals')
    .get()
    .then((snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          name: doc.data().name,
          alergens: doc.data().alergens,
          price: doc.data().price,
          type: doc.data().type,
          menuNumber: doc.data().menuNumber,
        });
      });
      return data;
    });

  return promise;
}

export default fetchMealsApiCall;
